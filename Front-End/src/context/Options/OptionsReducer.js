const OptionsReducer = (state, { type, payload } = action) => {
  switch (type) {
    case "SET_OPTION_ID":
      return {
        ...state,
        current_id: payload,
      };
  }
};

export default OptionsReducer;
