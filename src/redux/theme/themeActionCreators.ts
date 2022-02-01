import { useDispatch } from "react-redux";
import { DARK, LIGHT } from "./themeActionTypes"

 export const toggleTheme = (currentTheme:string) => {    
     
    if(currentTheme === LIGHT)
    {
        document.documentElement.style.setProperty('--primaryColor', '#1D1D1D');
        document.documentElement.style.setProperty('--primaryBackground', '#121212');
        document.documentElement.style.setProperty('--primaryMainColor', '#ebebeb');


        return {
            type: DARK,
        }
    }

    document.documentElement.style.setProperty('--primaryColor', '#ffffff');
    document.documentElement.style.setProperty('--primaryBackground', '#f6f6f7');
    document.documentElement.style.setProperty('--primaryMainColor', '#44475a');


    return {
        type: LIGHT,
    }
}