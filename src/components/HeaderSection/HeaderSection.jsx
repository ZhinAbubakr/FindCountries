import { Typography, Button, Box,} from "@mui/material";
import Brightness3Icon from '@mui/icons-material/Brightness3';
import { useTheme } from "@mui/material";
const HeaderSection = ({changeTheme,currentTheme}) => {
  const theme = useTheme()
  const currentMode = currentTheme === "light" ? "dark" : "light"
    return ( 
        <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: 80,
          padding: 2,
          boxShadow: "3",
          background: theme.palette.background.paper,
        }
      }
      >
        
        <Typography
          variant="h1"
          sx={{
            fontSize: 17,
            fontFamily: "Nunito Sans, sans-serif",
            fontWeight: "800",
          }}
        >
          Where in the world?
        </Typography>

        <Button
          onClick={changeTheme}
          color='inherit'
          sx={{
            fontFamily: "Nunito Sans,sans-serif",
            fontWeight: 600,
          }}
          startIcon={<Brightness3Icon sx={{transform:'scaleX(-1)'}}/>}
        >
          {currentMode} Mode
        </Button>
      </Box>
     );
}
 
export default HeaderSection;