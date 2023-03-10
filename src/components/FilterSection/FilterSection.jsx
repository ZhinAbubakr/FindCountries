/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import {Stack} from '@mui/material';
import RegionSelection from '../RegionSelection/RegionSelection';
import SearchInput from '../SearchInput/SearchInput'
const FilterSection = ({region, onRegionChange, inputValue, onInputChange}) => {
    
    return ( 
        <Stack 
            mt={3} 
            spacing={1}
            justifyContent={{xs: 'flex-start', md:"space-between"}}
            direction={{xs: 'column', sm:'row'}} 
            sx={{
                textAlign:'left',
                padding:'5px 30px'
            }}
        >
            
            {useMemo(()=><SearchInput inputValue={inputValue} onInputChange={onInputChange}/>,[inputValue])}
            {useMemo(()=><RegionSelection region={region} onRegionChange={onRegionChange}/>,[region])}
      </Stack>
     );
}
 
export default FilterSection;

