package com.wenabi.interview.servicesApi;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wenabi.interview.customEntity.WishDetail;
import com.wenabi.interview.dtos.WishConsultDto;
import com.wenabi.interview.dtos.WishStatusDto;
import com.wenabi.interview.mapper.WishMapper;
import com.wenabi.interview.services.WishService;

@Service
public class WishServiceApi {
	
	@Autowired
	WishService wishService;

    /**
     * Compte le nombre total de wish par status
     * @return WishStatusDto
     */
	public WishStatusDto countWishByStatus() {		
		return WishMapper.mapCountStatusToCountStatusDto(this.wishService.countWishByStatus());
	}

    /**
     * Accepte une liste de statuts de wish et pour cette liste renvoit 
     * toutes les informations pour le display des donnees front
     * @param statusList
     * @return List<WishConsultDto>
     */
	public List<WishConsultDto> getAllWishConsultByStatus(List<String> statusList) {
		List<WishDetail> listWish = this.wishService.getAllWishConsultByStatus(statusList);
		return listWish.stream().map(WishMapper::mapDetailToDetailDto).collect(Collectors.toList());
	}
}
