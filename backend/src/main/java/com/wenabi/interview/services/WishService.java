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

	public Map<String, Long> countWishByStatus() {
		return wishDao.countWishByStatus()
				.stream().collect(Collectors.toMap(WishStatus::getStatus,
						WishStatus::getCount
						, (c1, c2) -> c1));
	}

	public List<WishDetail> getAllWishConsultByStatus(List<String> statusList) {
		return wishDao.getAllWishConsultByStatus(statusList);
	}
}
