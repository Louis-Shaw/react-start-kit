import * as userinfoType from '../constant/userinfo';

const initialstate= {
    username:"xiaozhiheng",
    password:"password"
}
export default function userinfo (state=initialstate , action){
    
    const type = action.type;
    switch(type){
        case userinfoType.ADD_USERINFO:
            state.username += "0";
        return state;
        case userinfoType.UPDATE_USERINFO:
            
        return   Object.assign({} , state, {username :"agesss" ,password: "ppaa"})
        
        default :
        // console.log("default" , state)
        return state;
    }
}