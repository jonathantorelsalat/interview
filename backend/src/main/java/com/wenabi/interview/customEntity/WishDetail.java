package com.wenabi.interview.customEntity;

import java.sql.Timestamp;
import java.time.ZonedDateTime;
import java.util.Date;

import com.wenabi.interview.domain.Initiative;
import com.wenabi.interview.domain.Profile;

public interface WishDetail {
	
	Long getVolontaireId();
	Timestamp getDateInscription();
	String getPrenomVolontaire();
	String getNomVolontaire();
	String getNomInitiative();
	String getStreetName();
	String getCity();
	String getPostalCode();
	String getCountry();	
	String getNomCompanyVolontaire();
	String getPrenomCoordinateurMission();
	String getNomCoordinateurMission();
	String getWishStatus();
}
