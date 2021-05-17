import Hamburg from '../../data/hamburg.json'

const initialUsers = Hamburg.hamburg
  
  const initialState = {
    schools: initialUsers,
  };
  
  const schoolsReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case "GET_SCHOOLS":
        return Object.assign({}, state, {
          schools: action.payload,
        });
    }
  
    return state;
  };
  
  export { schoolsReducer };