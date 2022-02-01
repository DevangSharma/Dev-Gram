import React from 'react';
import { useSelector } from 'react-redux';
import { stateType } from "../redux";


function useTheme() {
  
    const theme = useSelector((state : stateType) => state.theme);

    return theme;
}

export default useTheme;
