import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from "./dashboard/Dashboard";
import DeliveryPersonDashboard from "./dashboard/DeliveryPersonDashboard";
import Checkout from "./checkout/Checkout";
import SalesManagerDashboard from "./dashboard/SalesManagerDashboard";
import EmployeeManagerDashboard from "./dashboard/EmployeeManagerDashboard";
import MarketingManagerDashboard from "./dashboard/MarketingManagerDashboard";
import StockManagerDashboard from "./dashboard/StockManagerDashboard";
import SupplierManagerDashboard from "./dashboard/SupplierManagerDashboard";


class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route exact path='/Dashboard' component={DeliveryPersonDashboard}/>
                        <Route exact path='/SalesManagerDashboard' component={SalesManagerDashboard}/>
                        <Route exact path='/EmployeeManagerDashboard' component={EmployeeManagerDashboard}/>
                        <Route exact path='/MarketingManagerDashboard' component={MarketingManagerDashboard}/>
                        <Route exact path='/StockManagerDashboard' component={StockManagerDashboard}/>
                        <Route exact path='/SupplierManagerDashboard' component={SupplierManagerDashboard}/>
                        <Route exact path='/Checkout' component= {Checkout}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
