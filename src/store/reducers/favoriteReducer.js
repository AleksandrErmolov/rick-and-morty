import {
  ADD_TO_FAVORITE,
  REMOVE_HERO_FROM_FAVORITE,
} from "../constans/actionTypes";

import { omit } from "lodash";

const initialState = {};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };

    case REMOVE_HERO_FROM_FAVORITE:
      return omit(state, [action.payload]);

    default:
      return state;
  }
};

export default favoriteReducer;
