import axios from 'axios'
import React, {Component, forwardRef, useEffect} from 'react'
import MUIDataTable from "mui-datatables";
import AddBox from "@material-ui/icons/AddBox";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Edit from "@material-ui/icons/Edit";
import SaveAlt from "@material-ui/icons/SaveAlt";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import Search from "@material-ui/icons/Search";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Remove from "@material-ui/icons/Remove";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";

export default function CustomerTable(){

    const { useState } = React;

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const columns = [
    {title: "ID", field: "id"},
    {title: "Name", field: "name"},
    {title: "NIC", field: "NIC"},
    {title: "Email", field: "email"},
    {title: "Contact number", field: "contact"},
    {title: "Address", field: "address"},
    {title: "Loyalty type", field: "loyalty"}
];

const [data, setData] = useState([]); //table data

const [iserror, setIserror] = useState(false)
const [errorMessages, setErrorMessages] = useState([])

useEffect(() => {
    axios.get('/api/customers').then(response => {
        setData(response.data)
        console.log(response.data.data);
    })

}, [])

const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
    let errorList = []

    if(newData.id === ""){
        errorList.push("Please enter id")
    }

    if(errorList.length < 2){
        console.log(newData.id);
        axios.put('/api/customers/'+newData.id, newData)
            // api.patch("/Employees/"+newData.id, newData)
            .then(res => {
                console.log(newData.id);
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve()
                setIserror(false)
                setErrorMessages([])
            })
            .catch(error => {
                setErrorMessages(["Update failed! Server error"])
                setIserror(true)
                resolve()

            })
    }else{
        setErrorMessages(errorList)
        setIserror(true)
        resolve()

    }

}

const handleRowAdd = (newData, resolve) => {
    //validation
    let errorList = []

    if(newData.id === undefined){
        errorList.push("Please enter id")
    }


    if(errorList.length < 2){ //no error
        axios.post('/api/customers/', newData)
            // api.post("/Employees", newData)
            .then(res => {
                console.log(newData);
                let dataToAdd = [...data];
                dataToAdd.push(newData);
                setData(dataToAdd);
                resolve()
                setErrorMessages([])
                setIserror(false)
            })
            .catch(error => {
                setErrorMessages(["Cannot add data. Server error!"])
                setIserror(true)
                resolve()
            })
    }else{
        setErrorMessages(errorList)
        setIserror(true)
        resolve()
    }


}

const handleRowDelete = (oldData, resolve) => {
    axios.delete('/api/customers/'+oldData.id)
        // api.delete("/Employees/"+oldData.id)
        .then(res => {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            console.log(oldData.tableData.id);
            console.log(index);
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
            resolve()
        })
        .catch(error => {
            setErrorMessages(["Delete failed! Server error"])
            setIserror(true)
            resolve()
        })
}

return (
    <MaterialTable
        title="Customers"
        columns={columns}
        data={data}
        icons={tableIcons}
        editable={{
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                    handleRowUpdate(newData, oldData, resolve);

                }),
            onRowAdd: (newData) =>
                new Promise((resolve) => {
                    handleRowAdd(newData, resolve)
                }),
            onRowDelete: (oldData) =>
                new Promise((resolve) => {
                    handleRowDelete(oldData, resolve)
                }),
        }}
    />
);
}

