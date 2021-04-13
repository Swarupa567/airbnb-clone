import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from './SearchPage'
import SearchResult from './SearchResult'

function App() {
  return (

    //BEM
    <div className="app">
        <Router>

            <Header />

            <Switch>
                <Route path  = "/search">
                    <SearchPage />
                </Route>
                <Route path ="/">
                    <Home />
                </Route> 
            </Switch>

            <Footer />
        </Router>
        
        

    </div>
  );
}

export default App;
