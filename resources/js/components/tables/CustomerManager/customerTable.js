import axios from 'axios'
import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

class customerTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: [[]],
            msg: null,
            flash:false,
            alert: null,
        }
    }

    componentDidMount () {
        axios.get('/api/Customers').then(response => {
            this.setState({
                customers: response.data
            })
            console.log(response.data);
            console.log(this.state.customers);
        })
    }


    onSuccess(){
        this.componentDidMount();
    }



    render () {
        const { customers } = this.state
        const columns = [
            {
                name: "customer_id",
                label: "Customer Id",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "name",
                label: "Name",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "NIC",
                label: "NIC",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "email",
                label: "Email",
                options: {
                    filter: true,
                    sort: true,
                }
            },

            {
                name: "contact",
                label: "Contact",
                options: {
                    filter: true,
                    sort: true,
                }
            },

            {
                name: "profession",
                label: "Profession",
                options: {
                    filter: true,
                    sort: true,
                }
            },

            {
                name: "address",
                label: "Address",
                options: {
                    filter: true,
                    sort: true,
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
                title={"CUSTOMERS"}
                data={customers}
                columns={columns}
                options={options}
            />


        )
    }
}

export default customerTable
