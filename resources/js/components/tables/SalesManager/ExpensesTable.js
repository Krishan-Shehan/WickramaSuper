import axios from 'axios'
import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

class ExpensesTable extends Component {


    constructor(props) {
        super(props)
        this.state = {
            expenses: [[]],
            msg: null,
            flash:false,
            alert: null,
        }
    }

    componentDidMount () {
        axios.get('/api/Expenses').then(response => {
            this.setState({
                expenses: response.data
            })
            console.log(response.data);
            console.log(this.state.expenses);
        })
    }


    onSuccess(){
        this.componentDidMount();
    }



    render () {
        const { expenses } = this.state
        const columns = [
            {
                name: "expense_id",
                label: "Expense id",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "payment_type",
                label: "Payment type",
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
                name: "details",
                label: "Details",
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
                title={"OVERHEAD EXPENSES"}
                data={expenses}
                columns={columns}
                options={options}
            />


        )
    }
}

export default ExpensesTable
