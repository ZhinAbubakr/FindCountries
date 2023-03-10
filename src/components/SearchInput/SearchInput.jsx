import SearchIcon from '@mui/icons-material/Search';
import {InputBase,Paper} from '@mui/material';

const SearchInput = ({inputValue, onInputChange}) => {
    return ( 
        <Paper
            component="form"
            sx={{ 
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '85%',
                maxWidth: 500,
            }}
        >
            <SearchIcon />
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for a country..."
                inputProps={{ 'aria-label': 'Search for a country...' }}
                value={inputValue}
                onChange={onInputChange}
            />
        </Paper>
     );
}
 
export default SearchInput;