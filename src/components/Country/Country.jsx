import { Link } from "react-router-dom";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  Typography,
} from "@mui/material";

const Country = ({ allCountryData, clicked }) => {
  const { name, population, region, capital, photo } = allCountryData;
  return (
    <Link
      to={`/countries/${name}`}
      onClick={clicked}
      style={{
        textDecoration: "none",
      }}
    >
      <Card sx={{ width: 280, margin: "18px", minHeight: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={photo}
            alt={`${name} flag`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="subtitle2">
              <b>Population</b>: {population}
            </Typography>
            <Typography variant="subtitle2">
              <b>Region:</b> {region}
            </Typography>
            <Typography variant="subtitle2">
              <b>Capital:</b> {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Country;
