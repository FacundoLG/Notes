const UserReducer = (state, { type, payload } = action) => {
  switch (type) {
    case "SET_USER":
      console.log("setting user", {
        ...state,
        token: payload?.token,
        username: payload?.username,
      });
      return {
        ...state,
        token: payload?.token,
        username: payload?.username,
      };
    default:
      return state;
  }
};

export default UserReducer;
