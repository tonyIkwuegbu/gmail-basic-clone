import {SET_DETAILS} from "./Types";

export const setPersonDetails = (details) => {
 return {
     type : SET_DETAILS,
     payload : details
 }
}
