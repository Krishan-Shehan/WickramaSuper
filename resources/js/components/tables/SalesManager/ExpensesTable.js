import axios from 'axios'
import React, {Component, forwardRef, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
// import * as Swal from "laravel-mix";

// class ExpensesTable extends Component {
export default function ExpensesTable(){

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
        {title: "Description", field: "description"},
        {title: "Amount", field: "amount"}
    ];

    const [data, setData] = useState([]); //table data

    const [iserror, setIserror] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])

    useEffect(() => {
        axios.get('/api/expenses').then(response => {
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
        if(newData.name === ""){
            errorList.push("Please enter name")
        }
        if(newData.description === "" ){
            errorList.push("Please enter a description")
        }
        if(newData.amount === "" ){
            errorList.push("Please enter a amount")
        }

        if(errorList.length < 1){
            console.log(newData.id);
            axios.put('/api/expenses/'+newData.id, newData)
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
        if(newData.name === undefined){
            errorList.push("Please enter name")
        }
        if(newData.description === undefined ){
            errorList.push("Please enter a description")
        }
        if(newData.amount === undefined ){
            errorList.push("Please enter a amount")
        }

        if(errorList.length < 1){ //no error
            axios.post('/api/expenses/', newData)
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
        axios.delete('/api/expenses/'+oldData.id)
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
            title="Expenses"
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

    // constructor(props) {
    //     super(props)
    //
    //     // Setting up functions
    //     this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    //     this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
    //     this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    //
    //     // Setting up state
    //     this.state = {
    //         name: '',
    //         description: '',
    //         amount: ''
    //     }
    // }
    //
    // onChangeExpenseName(e) {
    //     this.setState({name: e.target.value})
    // }
    //
    // onChangeExpenseAmount(e) {
    //     this.setState({amount: e.target.value})
    // }
    //
    // onChangeExpenseDescription(e) {
    //     this.setState({description: e.target.value})
    // }
    //
    // onSubmit(e) {
    //     e.preventDefault()
    //     const expense = {
    //         name: this.state.name,
    //         amount: this.state.amount,
    //         description: this.state.description
    //     };
    //     axios.post('/api/expenses/', expense)
    //         .then(res => console.log(res.data));
    //     // console.log(`Expense successfully created!`);
    //     // console.log(`Name: ${this.state.name}`);
    //     // console.log(`Amount: ${this.state.amount}`);
    //     // console.log(`Description: ${this.state.description}`);
    //     // Swal.fire(
    //     //     'Good job!',
    //     //     'Expense Added Successfully',
    //     //     'success'
    //     // )
    //
    //     this.setState({name: '', amount: '', description: ''})
    // }
    //
    // render() {
    //     return (<div className="form-wrapper">
    //         <Form onSubmit={this.onSubmit}>
    //             <Row>
    //                 <Col>
    //                     <Form.Group controlId="Name">
    //                         <Form.Label>Name</Form.Label>
    //                         <Form.Control type="text" value={this.state.name} onChange={this.onChangeExpenseName}/>
    //                     </Form.Group>
    //
    //                 </Col>
    //
    //                 <Col>
    //                     <Form.Group controlId="Amount">
    //                         <Form.Label>Amount</Form.Label>
    //                         <Form.Control type="number" value={this.state.amount} onChange={this.onChangeExpenseAmount}/>
    //                     </Form.Group>
    //                 </Col>
    //
    //             </Row>
    //
    //
    //             <Form.Group controlId="description">
    //                 <Form.Label>Description</Form.Label>
    //                 <Form.Control as="textarea" type="textarea" value={this.state.description} onChange={this.onChangeExpenseDescription}/>
    //             </Form.Group>
    //
    //
    //             <Button variant="primary" size="lg" block="block" type="submit">
    //                 Add Expense
    //             </Button>
    //         </Form>
    //
    //
    //         {/*<ExpensesList> </ExpensesList>*/}
    //     </div>);
    // }

//
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             expenses: [[]],
//             msg: null,
//             flash:false,
//             alert: null,
//         }
//     }
//
//     componentDidMount () {
//         axios.get('/api/Expenses').then(response => {
//             this.setState({
//                 expenses: response.data
//             })
//             console.log(response.data);
//             console.log(this.state.expenses);
//         })
//     }
//
//
//     onSuccess(){
//         this.componentDidMount();
//     }
//
//
//
//     render () {
//         const { expenses } = this.state
//         const columns = [
//             {
//                 name: "expense_id",
//                 label: "Expense id",
//                 options: {
//                     filter: true,
//                     sort: true,
//                 }
//             },
//             {
//                 name: "payment_type",
//                 label: "Payment type",
//                 options: {
//                     filter: true,
//                     sort: true,
//                 }
//             },
//             {
//                 name: "amount",
//                 label: "Amount",
//                 options: {
//                     filter: true,
//                     sort: true,
//                 }
//             },
//             {
//                 name: "details",
//                 label: "Details",
//                 options: {
//                     filter: true,
//                     sort: true,
//                 }
//             },
//             {
//                 name: "date",
//                 label: "Date",
//                 options: {
//                     filter: true,
//                     sort: true,
//                 }
//             },
//
//         ];
//
//
//
//         const data = [
//             ["Joe James", "Test Corp", "Yonkers", "NY"],
//             ["John Walsh", "Test Corp", "Hartford", "CT"],
//             ["Bob Herm", "Test Corp", "Tampa", "FL"],
//             ["James Houston", "Test Corp", "Dallas", "TX"],
//         ];
//
//         const options = {
//             filterType: 'checkbox',
//         };
//
//
//         return (
//
//             <MUIDataTable
//                 title={"OVERHEAD EXPENSES"}
//                 data={expenses}
//                 columns={columns}
//                 options={options}
//             />
//
//
//         )
//     }
}
//
// export default ExpensesTable
