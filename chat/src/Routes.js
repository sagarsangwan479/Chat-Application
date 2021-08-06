import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Chat from './Chat'
import Home from './Home'


const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={Home} />
            <Switch>
                
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;