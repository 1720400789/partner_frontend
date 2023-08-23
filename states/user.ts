import {UserType} from "../src/models/user";

let currentUser: UserType;

const setCurrentUserState = (user: UserType) => {
    currentUser = user;
}

const getCuttentUserState = () : UserType => {
    return currentUser;
}

export {
    setCurrentUserState,
    getCuttentUserState,
}