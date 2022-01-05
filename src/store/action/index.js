import {
  ADD_TO_FAVORITE,
  REMOVE_HERO_FROM_FAVORITE,
} from "../constans/actionTypes";

export const addToFavoorite = (obj) => ({
  type: ADD_TO_FAVORITE,
  payload: obj,
});

export const removeFromFavoorite = (id) => ({
  type: REMOVE_HERO_FROM_FAVORITE,
  payload: id,
});
