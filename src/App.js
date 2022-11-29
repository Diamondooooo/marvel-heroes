import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './components/Main/Main';
import Marvel from './components/Marvel/Marvel';
import FavoritePage from "./components/FavoritesPage/FavoritesPage";
import Header from "./components/Header/Header";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/:id" element={<Marvel/>}/>
                <Route path="/favorite" element={<FavoritePage/>}/>
            </Routes>
        </div>
    );
}

export default App;