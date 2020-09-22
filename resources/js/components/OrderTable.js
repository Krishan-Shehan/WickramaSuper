import axios from 'axios'
import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

class OrderTable extends Component {


    constructor(props) {
        super(props)
        this.state = {
            orders: [[]],
            msg: null,
            flash:false,
            alert: null,
        }
    }

    componentDidMount () {
        axios.get('/api/orders').then(response => {
            this.setState({
                orders: response.data
            })
            console.log(response.data);
            console.log(this.state.orders);
        })
    }


    onSuccess(){
        this.componentDidMount();
    }



    render () {
        const { orders } = this.state
        const columns = [
            {
                name: "order_id",
                label: "Order id",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "customer",
                label: "Customer",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "status",
                label: "Status",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "type",
                label: "Type",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "invoice_number",
                label: "Invoice number",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "delivery_person",
                label: "Delivery person",
                options: {
                    filter: true,
                    sort: false,
                }
            },
        ];



        const data = [
            ["Joe James", "Test Corp", "Yonkers", "NY"],
            ["John Walsh", "Test Corp", "Hartford", "CT"],
            ["Bob Herm", "Test Corp", "Tampa", "FL"],
            ["James Houston", "Test Corp", "Dallas", "TX"],
        ];

        const options = {
            filterType: 'checkbox',
        };





        return (

            <MUIDataTable
                title={"Ongoing Orders"}
                data={orders}
                columns={columns}
                options={options}
            />


        )
    }
}

export default OrderTable
