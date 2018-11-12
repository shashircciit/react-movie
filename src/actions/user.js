import axios from 'axios';
import {API_URL} from '../config'
import {
 SHOW_TIME, SYNC_QUANTITY,SAVE_SEAT,ADD_TO_CART, UPDATE_CART, REMOVE_ITEM,CART_DATA,SAVE_USER, LOG_OUT
} from './types';


//LOGIN REDUCER
export const signIn = (user, callback) => async dispatch => {
 try {
  let response = await axios.post(API_URL+'/adminLogin', user);
  let {data}=response;
  if(data.status == 1){
    await localStorage.setItem("access_token", data.access_token);
    console.log(JSON.stringify(localStorage.getItem("access_token")));
    let payload = {
        access_token : data.access_token,
        _id : data.data._id,
        firstname:data.data.firstname,
        lastname:data.data.lastname,
         profilePic : data.data.photo
    }
    dispatch({ type: SAVE_USER, payload });
    console.log(JSON.stringify(data.access_token));
  }
  callback(response);
  } catch (error) {
    throw error;
  }
};

//LOGOUT REDUCER
export const logOut = () => async dispatch => {
  try {
    await localStorage.setItem("access_token", null);
    dispatch({ type: LOG_OUT, payload: {undefined} });
  } catch (error) {
    throw error;
  }
};

//EDIT REDUCER
export const addToCart =(ticketDetails) => async dispatch =>{
      dispatch({ type:CART_DATA, payload: ticketDetails });   
 }
  ;

  export function cartpage(payload) {
    return {
      type: ADD_TO_CART,
      payload: payload
    }
  }
  
  export function updateCart(payload) {
    return {
      type: UPDATE_CART,
      payload: payload
    }
  }
  
  export function removeItem(payload) {
    return {
      type: REMOVE_ITEM,
      payload: payload
    }
  }
  
  export function saveseat(seatReserved) {
    return {
      type: SAVE_SEAT,
      payload: seatReserved
    }
  }
    

  export function syncQuantity(payload) {
    return {
      type: SYNC_QUANTITY,
      payload: payload
    }
  }


  export function showtime(payload) {
    return {
      type: SHOW_TIME,
      payload: payload
    }
  }
  

  

  

