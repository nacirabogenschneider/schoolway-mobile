const initialUsers = [
    {
      userId: "01",
      name: "Nacira Bogenschneider",
      email: "mail@nacira.de",
      password: "123",
    },
    {
      userId: "02",
      name: "Test User",
      email: "mail@test.de",
      password: "test",
    },
  ];
  
  const initialState = {
    users: initialUsers,
  };
  
  const usersReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case "GET_USER":
        return Object.assign({}, state, {
          users: action.payload,
        });
    }
  
    return state;
  };
  
  export { usersReducer };