import React, { createContext, useContext, useReducer } from "react";
//Prepare the dataLayer
export const StateContext = createContext();
//wrap our app and prrovide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {" "}
    {children}
  </StateContext.Provider>
);
//pull infromation from the data layer
export const useStateValue = () => useContext(StateContext);
