import {FormControl,InputLabel,MenuItem,Select} from '@mui/material';
const RegionSelection = ({region, onRegionChange}) => {
    return ( 
        <FormControl sx={{
            width:200,
            height: 50,
        }}>
            <InputLabel id="demo-simple-select-label" sx={{
              fontSize:14,
            }}>Filter by Region</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={region}
                label="Filter by Region"
                onChange={onRegionChange}
                sx={{
                    fontSize:14,
                  }}
            >
                <MenuItem value={'Africa'}>Africa</MenuItem>
                <MenuItem value={'Americas'}>America</MenuItem>
                <MenuItem value={'Asia'}>Asia</MenuItem>
                <MenuItem value={'Europe'}>Europe</MenuItem>
                <MenuItem value={'Oceania'}>Oceania</MenuItem>
            </Select>
        </FormControl>
     );
}
 
export default RegionSelection;