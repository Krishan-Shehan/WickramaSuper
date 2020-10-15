import axios from 'axios'
import React, {Component, forwardRef, useEffect} from 'react'
import MUIDataTable from "mui-datatables";
class LeaveTable extends Component {


// function validateEmail(email){
//     const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
//     return re.test(String(email).toLowerCase());
// }
//
// export default function LeaveTable () {
//     const { useState } = React;
//
//     // const api = axios.create({
//     //     baseURL: 'http://127.0.0.1:8000/api'
//     // })
//
//     const tableIcons = {
//         Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//         Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//         Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//         Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//         DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//         Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//         Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//         Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//         FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//         LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//         NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//         PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//         ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//         Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//         SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//         ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//         ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
//     };
//
//     const columns = [
//         // {title: "id", field: "id", hidden: true},
//         // {
//         //     title: "Avatar",
//         //     render: rowData => <Avatar maxInitials={1} size={40} round={true}
//         //                                name={rowData === undefined ? " " : rowData.first_name}/>
//         // },
//         {title: "ID", field: "id"},
//         {title: "First name", field: "employee_name"},
//         {title: "First name", field: "email"},
//         {title: "First name", field: "job_role"},
//         {title: "First name", field: "contact_number"}
//
//         // {title: "First name", field: "first_name"},
//         // {title: "Last name", field: "last_name"},
//         // {title: "email", field: "email"}
//     ];
//     const [data, setData] = useState([]); //table data
//
//     //for error handling
//     const [iserror, setIserror] = useState(false)
//     const [errorMessages, setErrorMessages] = useState([])
//
//     useEffect(() => {
//         axios.get('/api/Employees').then(response => {
//             setData(response.data)
//             console.log(response.data.data);
//         })
//
//     }, [])
//
//     const handleRowUpdate = (newData, oldData, resolve) => {
//         //validation
//         let errorList = []
//         if(newData.employee_name === ""){
//             errorList.push("Please enter first name")
//         }
//         if(newData.job_role === ""){
//             errorList.push("Please enter last name")
//         }
//         if(newData.email === "" || validateEmail(newData.email) === false){
//             errorList.push("Please enter a valid email")
//         }
//         if(newData.contact_number === "" ){
//             errorList.push("Please enter a valid email")
//         }
//
//         if(errorList.length < 1){
//             console.log(newData.id);
//             axios.put('/api/Employees/'+newData.id, newData)
//             // api.patch("/Employees/"+newData.id, newData)
//                 .then(res => {
//                     console.log(newData.id);
//                     const dataUpdate = [...data];
//                     const index = oldData.tableData.id;
//                     dataUpdate[index] = newData;
//                     setData([...dataUpdate]);
//                     resolve()
//                     setIserror(false)
//                     setErrorMessages([])
//                 })
//                 .catch(error => {
//                     setErrorMessages(["Update failed! Server error"])
//                     setIserror(true)
//                     resolve()
//
//                 })
//         }else{
//             setErrorMessages(errorList)
//             setIserror(true)
//             resolve()
//
//         }
//
//     }
//
//     const handleRowAdd = (newData, resolve) => {
//         //validation
//         let errorList = []
//         // if(newData.first_name === undefined){
//         //     errorList.push("Please enter first name")
//         // }
//         // if(newData.last_name === undefined){
//         //     errorList.push("Please enter last name")
//         // }
//         // if(newData.email === undefined || validateEmail(newData.email) === false){
//         //     errorList.push("Please enter a valid email")
//         // }
//
//         if(newData.employee_name === undefined){
//             errorList.push("Please enter first name")
//         }
//         if(newData.job_role === undefined){
//             errorList.push("Please enter last name")
//         }
//         if(newData.email === undefined || validateEmail(newData.email) === false){
//             errorList.push("Please enter a valid email")
//         }
//         if(newData.contact_number === undefined ){
//             errorList.push("Please enter a valid email")
//         }
//
//         if(errorList.length < 1){ //no error
//             axios.post('/api/Employees/',newData)
//             // api.post("/Employees", newData)
//                 .then(res => {
//                     console.log(newData);
//                     let dataToAdd = [...data];
//                     dataToAdd.push(newData);
//                     setData(dataToAdd);
//                     resolve()
//                     setErrorMessages([])
//                     setIserror(false)
//                 })
//                 .catch(error => {
//                     setErrorMessages(["Cannot add data. Server error!"])
//                     setIserror(true)
//                     resolve()
//                 })
//         }else{
//             setErrorMessages(errorList)
//             setIserror(true)
//             resolve()
//         }
//
//
//     }
//
//     const handleRowDelete = (oldData, resolve) => {
//         axios.delete('/api/Employees/'+oldData.id)
//         // api.delete("/Employees/"+oldData.id)
//             .then(res => {
//                 const dataDelete = [...data];
//                 const index = oldData.tableData.id;
//                 console.log(oldData.tableData.id);
//                 console.log(index);
//                 dataDelete.splice(index, 1);
//                 setData([...dataDelete]);
//                 resolve()
//             })
//             .catch(error => {
//                 setErrorMessages(["Delete failed! Server error"])
//                 setIserror(true)
//                 resolve()
//             })
//     }
//
//
//     return (
//                     <MaterialTable
//                         title="User data from remote source"
//                         columns={columns}
//                         data={data}
//                         icons={tableIcons}
//                         editable={{
//                             onRowUpdate: (newData, oldData) =>
//                                 new Promise((resolve) => {
//                                     handleRowUpdate(newData, oldData, resolve);
//
//                                 }),
//                             onRowAdd: (newData) =>
//                                 new Promise((resolve) => {
//                                     handleRowAdd(newData, resolve)
//                                 }),
//                             onRowDelete: (oldData) =>
//                                 new Promise((resolve) => {
//                                     handleRowDelete(oldData, resolve)
//                                 }),
//                         }}
//                     />
//     );
// }

    // }

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

export default LeaveTable
