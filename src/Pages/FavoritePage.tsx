import React from 'react';
import {observer} from 'mobx-react-lite' 
import Container from '../Components/Container/Container';
import Headers from '../Components/Header/Headers';
import StockStore from '../store/ApiStore'
import { apiItem } from '../types/types';
import FavoriteList from '../Components/FavoriteList/FavoriteList';
import Main from '../Components/Main/Main';

const FavoritePage = observer(() => {
    return (
        <Container>
        <Headers/>
        <FavoriteList/>
        
    </Container>
    );
})

export default FavoritePage;