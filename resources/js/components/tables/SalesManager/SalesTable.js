import axios from 'axios'
import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

class SalesTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sales: [[]],
            msg: null,
            flash:false,
            alert: null,
        }
    }

    componentDidMount () {
        axios.get('/api/Sales').then(response => {
            this.setState({
                sales: response.data
            })
            console.log(response.data);
            console.log(this.state.sales);
        })
    }


    onSuccess(){
        this.componentDidMount();
    }



    render () {
        const { sales } = this.state
        const columns = [
            {
                name: "invoice_number",
                label: "Invoice Number",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "cashier_number",
                label: "Cashier Number",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "amount",
                label: "Amount",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "invoice_date",
                label: "Date",
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
                title={"SALES"}
                data={sales}
                columns={columns}
                options={options}
            />


        )
    }
}

export default SalesTable
