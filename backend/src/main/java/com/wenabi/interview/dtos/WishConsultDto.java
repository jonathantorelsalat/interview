package com.wenabi.interview.dtos;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WishConsultDto {
	private Date dateInscription;
	private Long volontaireId;
	private String prenom;
	private String nom;
	private String nomMission;	
	private String nomCompany;
	private String localisationMission;
	private String wishStatus;
	private String prenomCoordinateur;
	private String nomCoordinateur;
	private String nomPoste;
}
