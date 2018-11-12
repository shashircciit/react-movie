import {
  SHOW_TIME,SAVE_SEAT,CART_DATA,LOG_OUT,SAVE_USER
} from '../actions/types.js';

const INITIAL_STATE = {
  user: {},
  userList:[],
  editUser:{},
  fdata:{},
  admindata:{},
  cartdata:{},
  saveseat:[],
  showtime:{},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER:
      return  Object.assign({}, state, {user: action.payload});
      case CART_DATA:
      return  Object.assign({}, state, {cartdata: action.payload});
      case SAVE_SEAT:
      return  Object.assign({}, state, {saveseat: action.payload});
      case SHOW_TIME:
      return  Object.assign({}, state, {showtime: action.payload});
      case LOG_OUT:
      return  INITIAL_STATE
    default:
      return state;
  }
}
