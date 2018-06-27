import * as userinfoType from '../constant/userinfo';

const state= {
    username:"xiaozhiheng",
    password:"password"
}
export default function userinfo (initialstate=state , action){
    const type = action.type;
    switch(type){
        case userinfoType.ADD_USERINFO:
            state.username += "0";
        return state;
        case userinfoType.UPDATE_USERINFO:
            state.password = "gai"
        return state;
        default :return state;
    }
}