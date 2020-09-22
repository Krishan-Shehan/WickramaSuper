import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";

const datatableData = [
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
    ["4545","krishan shehan","pending","cash on delivery","123","shehan"],
];

 class OngoingOrders extends Component{

    render() {
     return (
        <>
            <Grid
            >
                    <MUIDataTable
                        title="Ongoing Orders"
                        data={datatableData}
                        columns={["Order Ref", "Customer", "Status", "Type","Invoice Id","Delivery Person"]}
                        options={{
                            filterType: "checkbox",
                            rowsPerPage: 6,
                        }}
                    />
            </Grid>
        </>

    );
    }
}
export default OngoingOrders

if (document.getElementById('OngoingOrders')) {
    ReactDOM.render(<OngoingOrders />, document.getElementById('OngoingOrders'));
}
