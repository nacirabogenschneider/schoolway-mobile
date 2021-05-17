
import { IS_DARKMODE } from "./actionTypes";

export const setMode = ({ data }:any) => {
  return {
    type: IS_DARKMODE,
    payload: data,
  };
};