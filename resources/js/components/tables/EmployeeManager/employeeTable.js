import axios from 'axios'
import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

class employeeTable extends Component {


    constructor(props) {
        super(props)
        this.state = {
            employees: [[]],
            msg: null,
            flash:false,
            alert: null,
        }
    }

    componentDidMount () {
        axios.get('/api/Employees').then(response => {
            this.setState({
                employees: response.data
            })
            console.log(response.data);
            console.log(this.state.employees);
        })
    }


    onSuccess(){
        this.componentDidMount();
    }



    render () {
        const { employees } = this.state
        const columns = [
            {
                name: "employee_id",
                label: "Employee id",
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
                name: "email",
                label: "Email",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "contact_number",
                label: "Contact Number",
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
                title={"Employees"}
                data={employees}
                columns={columns}
                options={options}
            />


        )
    }
}

export default employeeTable
