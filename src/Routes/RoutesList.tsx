import React from 'react';
import {Route} from 'react-router-dom'
import { Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import StockPage from '../Pages/StockPage';
import PageNotFound from '../Pages/PageNotFound';
import FavoritePage from '../Pages/FavoritePage';

const RoutesList = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/stock' element={<StockPage/>}/>
            <Route path='/Favorite' element={<FavoritePage/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    );
};

export default RoutesList;