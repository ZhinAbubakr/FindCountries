import Country from '../Country/Country'
import {Box, CircularProgress} from "@mui/material";

const Countries = ({countriesData,loading}) => {
    let transformedCountries = []
    countriesData?.forEach((country)=> {
        const countryObjectData = {
            nativeName: country.nativeName,
            name:country.name,
            photo:country.flags.svg,
            region:country.region,
            population:country.population,
            capital:country.capital,
            key:country.alpha2Code,
            continent: country.continent,
        }
        transformedCountries.push(countryObjectData)
    })
    const countries = transformedCountries.map(country=> (
        <Country 
            key={country.key} 
            allCountryData={country}
        />
    ))
    return ( 
        <Box
            sx={{
                display: 'flex',
                justifyContent:"center",
                flexWrap:'wrap',
                alignItems:'center',
                padding:'5px 15px'
            }}
        >
            {loading ? < CircularProgress color="inherit"/> : countries}
        </Box>
     );
}
 
export default Countries;
