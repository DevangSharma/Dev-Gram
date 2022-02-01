import { DARK, LIGHT } from "./themeActionTypes"

 export const toggleTheme = (currentTheme:string) => {    
     
    if(currentTheme == LIGHT)
    {
        return {
            type: DARK,
        }
    }

    return {
        type: LIGHT,
    }
}