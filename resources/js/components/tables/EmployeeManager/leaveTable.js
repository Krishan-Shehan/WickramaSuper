import axios from 'axios'
import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

class leaveTable extends Component {


    constructor(props) {
        super(props)
        this.state = {
            leaves: [[]],
            msg: null,
            flash:false,
            alert: null,
        }
    }

    componentDidMount () {
        axios.get('/api/Leaves').then(response => {
            this.setState({
                leaves: response.data
            })
            console.log(response.data);
            console.log(this.state.leaves);
        })
    }


    onSuccess(){
        this.componentDidMount();
    }



    render () {
        const { leaves } = this.state
        const columns = [
            {
                name: "leave_id",
                label: "Leave id",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "employee_name",
                label: "Employee name",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "job_role",
                label: "Job role",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "leave_type",
                label: "Leave type",
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
                name: "date",
                label: "Date",
                options: {
                    filter: true,
                    sort: false,
                }
            },
            {
                name: "no_of_days",
                label: "No of days",
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
                title={"Leaves"}
                data={leaves}
                columns={columns}
                options={options}
            />


        )
    }
}

export default leaveTable
