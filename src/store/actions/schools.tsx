
import { GET_SCHOOLS } from "./actionTypes";

export const getSchools = ({ data }:any) => {
  return {
    type: GET_SCHOOLS,
    payload: data,
  };
};