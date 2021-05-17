import { boolean } from "yup";

const initialUsers: boolean = false;
  
  const initialState = {
    mode: initialUsers,
  };
  
  const modeReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case "IS_DARKMODE":
        return Object.assign({}, state, {
          mode: action.payload,
        });
    }
  
    return state;
  };
  
  export { modeReducer };