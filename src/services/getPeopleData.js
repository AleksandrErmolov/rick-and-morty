import {
  SWAPI_PARAM_PAGE,
} from "../constants/api";

export const getPeoplePageId = url=> { 
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
  console.log(" id", id);
  return Number(id)
}
