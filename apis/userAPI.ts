import myAxios from "../plugins/myAxios";
import {setCurrentUserState, getCuttentUserState} from "../states/user";

export const getCurrentUser = async () => {
    // const currentUser = getCuttentUserState()
    // if(currentUser) {
    //     return currentUser;
    // }
    const res = await myAxios.get('/user/current');
    if(res.code === 0){
        setCurrentUserState(res.data);
        return res.data;
    }
    return null;
}