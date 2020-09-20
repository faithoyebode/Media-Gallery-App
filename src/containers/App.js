import React from 'react'
import Header from '../common/Header';
import HomePage from '../components/Homepage';
import { Route } from "react-router-dom";
import MediaGalleryPage from './MediaGalleryPage';


const App = () => {
    return(
        <div className="container-fluid text-center">
            <Header />
            <HomePage />
            <Route path="/library" component={MediaGalleryPage} />
        </div>
    );
}




export default App;