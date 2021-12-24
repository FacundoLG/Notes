import { useReducer } from "react";
import OptionsContext from "./OptionsContext";
import OptionsReducer from "./OptionsReducer";
const OptionsState = ({ children }) => {
  const initialState = {
    current_id: null,
  };
  const [state, dispatch] = useReducer(OptionsReducer, initialState);

  const setID = (id) => {
    dispatch({
      type: "SET_OPTION_ID",
      payload: id || null,
    });
  };

  return (
    <OptionsContext.Provider value={{ state, setID }}>
      {children}
    </OptionsContext.Provider>
  );
};
export default OptionsState;
