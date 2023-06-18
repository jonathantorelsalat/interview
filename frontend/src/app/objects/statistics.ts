
export interface Statistics {
    status: string;
    count: number;
}

export enum StatusName {
    APPLICATION = 'Candidature',
    DISCUSSION = 'Echange',
    WAITING_ASSOCIATION_VALIDATION = 'Date à valider par le coordinateur',
    WAITING_MANAGER_VALIDATION = 'En attente du manager',
    IN_PROGRESS = 'En cours',
    USER_HAS_PARTICIPATED = 'A participé',
    CANCELLED = 'Annulé / refusé / non finalisé'
}

// Mettre à jour palette.scss si update
export enum ColorStatusName{
    APPLICATION = '#FF7F7F',
    DISCUSSION = '#FF0000',
    WAITING_ASSOCIATION_VALIDATION = '#FEC000',
    WAITING_MANAGER_VALIDATION = '#FFE38C',
    IN_PROGRESS = '#91CF50',
    USER_HAS_PARTICIPATED = '#BBDB9F',
    CANCELLED = '#262626'
}

export enum StatusDescription {
    APPLICATION = 'Avant que vous puissiez acceptez cette demande, le collaborateur doit renseigner ses dates. Ecrivez-lui pour l\'encourager à le faire !',
    DISCUSSION = 'Avant que vous puissiez acceptez cette demande, le collaborateur doit renseigner ses dates. Ecrivez-lui pour l\'encourager à le faire !',
    WAITING_ASSOCIATION_VALIDATION = '',
    WAITING_MANAGER_VALIDATION = 'Ce souhait est en attente de validation du manager du volontaire',
    IN_PROGRESS = '',
    USER_HAS_PARTICIPATED = '',
    CANCELLED = ''
}
