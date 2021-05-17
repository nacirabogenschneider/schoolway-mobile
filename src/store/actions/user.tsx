
import { GET_USER } from "./actionTypes";

export const getUser = ({ data }:any) => {
  return {
    type: GET_USER,
    payload: data,
  };
};