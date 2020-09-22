import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from "./dashboard/Dashboard";
import DeliveryPersonDashboard from "./dashboard/DeliveryPersonDashboard";
import deliveryPersonBody from "./DeliveryPersonBody";
import Checkout from "./checkout/Checkout";

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route exact path='/Dashboard' component={DeliveryPersonDashboard}/>
                        <Route exact path='/Checkout' component= {Checkout}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
