import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cadastros from './pages/Cadastros';
import PostForm from './pages/PostForm';


export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cadastros" exact component={Cadastros}/>
            <Route path="/formulario" exact component={PostForm}/>

        </Switch>

    );
}
