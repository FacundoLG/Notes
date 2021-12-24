const UserReducer = (state, { type, payload } = action) => {
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        token: payload?.token,
        username: payload?.username,
      };

    case "SET_ACTIVE_NOTE":
      return {
        ...state,
        activeNote: payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
