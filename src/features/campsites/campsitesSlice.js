import {CAMPSITES, campsites} from '../../../src/app/shared/CAMPSITES';

 export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())]
}

