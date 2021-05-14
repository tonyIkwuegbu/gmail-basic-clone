 import {SET_DETAILS} from "./Types";
 const initialState = { personalDetail : {}}
 const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_DETAILS :
            return {...state, personalDetail: action.payload}
           
    
        default: 
        return state;
            
    }

}
export default rootReducer;