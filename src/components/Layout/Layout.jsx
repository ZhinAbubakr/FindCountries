import { useEffect, useMemo,useState } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeaderSection from "../HeaderSection/HeaderSection";

const Layout = ({children}) => {
    const [themeMode, setThemeMode] = useState("light");
    useEffect(()=>{
        if(!localStorage.getItem("theme")) {
            localStorage.setItem('theme', "light")
        }
        const storageTheme = localStorage.getItem("theme")
        setThemeMode(storageTheme)
    },[themeMode])

    const handleChangeTheme = () => {
      if (themeMode === "light") {
        localStorage.setItem("theme", "dark")
        setThemeMode("dark");
      } else {
        localStorage.setItem("theme", "light")
        setThemeMode("light");
      }
    };
    const getDesignTokens = (mode) => ({
        palette: {
          mode,
          primary: {
            ...(mode === 'dark' ? {
              main: "hsl(209, 23%, 22%)",
            } : {
              main: "#fff"
            }
            ),
          },
          ...(mode === 'dark' ? {
            background: {
              default: "hsl(207, 26%, 17%)",
              paper: "hsl(209, 23%, 22%)",
            },
          } : {
            background: {
              default: "hsl(0, 0%, 98%)",
              input:"hsl(0, 0%, 100%)"
            }
          }),
          text: {
            ...(mode === 'light'
              ? {
                  primary: "hsl(200, 15%, 8%)",
                  secondary: "hsl(200, 15%, 8%)",
                }
              : {
                  primary: 'hsl(0, 0%, 100%)',
                }),
          },
          
        },
      });
    const theme = useMemo(
        () =>
          createTheme(getDesignTokens(themeMode)),
        [themeMode]
      );
    return (
        <ThemeProvider theme={theme} >
            <div style={{ maxWidth: 1920, margin: "0 auto" }}>
                <CssBaseline />
                <HeaderSection changeTheme={handleChangeTheme} currentTheme={themeMode}/>
                {children}
            </div>
        </ThemeProvider>

     );
}
 
export default Layout;
