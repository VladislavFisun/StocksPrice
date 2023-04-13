import React from 'react';

import Headers from '../Components/Header/Headers';
import Container from '../Components/Container/Container';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import Search from '../Components/Search/Search';

const StockPage = () => {
  
    return (
        <Container>
            <Headers/>
            <Search/>
            
        </Container>
    );
};

export default StockPage;