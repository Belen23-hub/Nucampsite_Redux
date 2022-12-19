import {CAMPSITES} from '../../../src/app/shared/CAMPSITES';

 export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectCampsiteById =(id) => {
    return CAMPSITES.find((campsites) => campsites.id===id);
}

