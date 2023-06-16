package com.wenabi.interview.daos;

import java.util.Collection;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.wenabi.interview.customEntity.WishDetail;
import com.wenabi.interview.customEntity.WishStatus;
import com.wenabi.interview.domain.Wish;

public interface WishDao extends JpaRepository<Wish, Integer> {
	@Query(value = "SELECT status as status, COUNT(*) as count"
			+ " FROM Wish"
			+ " GROUP BY status", nativeQuery = true)
	List<WishStatus> countWishByStatus();
	
	@Query(value = "SELECT wis.status as wishStatus, com.name as nomCompanyVolontaire, pro.id as volontaireId,"
			+ " pro.created_date as dateInscription, pro.first_name as prenomVolontaire, pro.last_name as nomVolontaire,"
			+ " ini.title as nomInitiative, ini.street_name as streetName, ini.city as city, ini.postal_code as postalCode, ini.country as country,"
			+ " cor.first_name as prenomCoordinateurMission, cor.last_name as nomCoordinateurMission"
			+ " FROM Wish wis"
			+ " JOIN Profile pro on pro.id = wis.volunteer_profile_id"
			+ " JOIN Company com on com.id = pro.company_id"
			+ " JOIN Initiative ini on ini.id = wis.initiative_id"
			+ " JOIN Profile cor on cor.id = ini.coordinator_profile_id" 
			+ " WHERE wis.status IN (:statusList)"
			+ " ORDER BY wis.status ASC", nativeQuery = true)
	List<WishDetail> getAllWishConsultByStatus(@Param("statusList") Collection<String> statusList);
}

