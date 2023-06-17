package com.wenabi.interview.services;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wenabi.interview.customEntity.WishDetail;
import com.wenabi.interview.customEntity.WishStatus;
import com.wenabi.interview.daos.WishDao;

@Service
public class WishService {
	@Autowired
	WishDao wishDao;

	/**
	 * Service effectuant un appel au back afin de recuperer 
	 * le nombre total de wish par status stocké dans List<WishStatus>
	 * Un collect transforme en Map
	 * @return Map<String, Long>
	 */
	public Map<String, Long> countWishByStatus() {
		return wishDao.countWishByStatus()
				.stream().collect(Collectors.toMap(WishStatus::getStatus,
						WishStatus::getCount
						, (c1, c2) -> c1));
	}

	/**
	 * Service effectuant un appel au back afin de recuperer 
	 * les informations des wishes possedant un des statuts passe en parametre
	 * @param List<String> statusList
	 * @return List<WishDetail>
	 */
	public List<WishDetail> getAllWishConsultByStatus(List<String> statusList) {
		return wishDao.getAllWishConsultByStatus(statusList);
	}
}
