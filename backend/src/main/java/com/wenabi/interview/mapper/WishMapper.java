package com.wenabi.interview.mapper;

import java.util.Map;
import java.util.Objects;

import com.wenabi.interview.customEntity.WishDetail;
import com.wenabi.interview.dtos.WishConsultDto;
import com.wenabi.interview.dtos.WishStatusDto;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class WishMapper {
	
	/**
	 * Transforme une Map de type Map<String, Long> en WishStatusDto si non null
	 * @param wishCountByStatus
	 * @return WishStatusDto
	 */
	public static WishStatusDto mapCountStatusToCountStatusDto(final Map<String, Long> wishCountByStatus) {
		if (Objects.isNull(wishCountByStatus)) {
			return null;
		}
		
		return WishStatusDto.builder()//
				.whishCountByStatus(wishCountByStatus)//
				.build();
	}
	
	/**
	 * Mapping des donnees de WishDetail dans WishConsultDto
	 * @param wishDetail
	 * @return WishConsultDto
	 */
	public static WishConsultDto mapDetailToDetailDto(final WishDetail wishDetail) {
		if (Objects.isNull(wishDetail)) {
			return null;
		}
		
		return WishConsultDto.builder()//
				.dateInscription(wishDetail.getDateInscription())//
				.localisationMission(wishDetail.getStreetName()+" "+wishDetail.getCity()+" "+wishDetail.getPostalCode()+" "+wishDetail.getCountry())//
				.nom(wishDetail.getNomVolontaire())//
				.nomCoordinateur(wishDetail.getNomCoordinateurMission())//
				.nomMission(wishDetail.getNomInitiative())//
				.nomCompany(wishDetail.getNomCompanyVolontaire())//
				.nomPoste("Coordinateur")//
				.prenom(wishDetail.getPrenomVolontaire())//
				.prenomCoordinateur(wishDetail.getPrenomCoordinateurMission())//
				.wishStatus(wishDetail.getWishStatus())//
				.volontaireId(wishDetail.getVolontaireId())//
				.build();
	}
}