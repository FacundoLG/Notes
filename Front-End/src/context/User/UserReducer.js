const UserReducer = (state, { type, payload } = action) => {
  switch (type) {
    case "SET_USER":
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
