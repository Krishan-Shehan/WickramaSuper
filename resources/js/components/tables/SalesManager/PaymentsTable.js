import axios from 'axios'
import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

class PaymentsTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            payments: [[]],
            msg: null,
            flash:false,
            alert: null,
        }
    }

    componentDidMount () {
        axios.get('/api/Payments').then(response => {
            this.setState({
                payments: response.data
            })
            console.log(response.data);
            console.log(this.state.payments);
        })
    }


    onSuccess(){
        this.componentDidMount();
    }



    render () {
        const { payments } = this.state
        const columns = [
            {
                name: "payment_id",
                label: "Payment Id",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "supplier_id",
                label: "Supplier Id",
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
                name: "payment_type",
                label: "Payment Type",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "date",
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
                title={"SUPPLIER PAYMENTS"}
                data={payments}
                columns={columns}
                options={options}
            />


        )
    }
}

export default PaymentsTable
