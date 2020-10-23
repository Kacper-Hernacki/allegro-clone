// set up data layer
import React, { createContext, useContext, useReducer } from 'react';

// data layer
export const StateContext = createContext();

//build provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// its how to use inside a component
export const useStateValue = () => useContext(StateContext);
