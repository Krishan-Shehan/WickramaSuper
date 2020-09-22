import React from 'react';
import MUIDataTable from "mui-datatables";
import AssingDeliveryPerson from "./AssingDeliveryPerson";

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

const columns = [
    {
        name: "order_id",
        label: "Order Ref",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "customer",
        label: "Customer",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "route",
        label: "Route",
        options: {
            filter: true,
            sort: false,
        },

    },
    {
        name: "type",
        label: "Type",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "invoice_id",
        label: "Invoice ID",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "delivery_person",
        label: "Delivery Person",
        options: {
            filter: false,
            sort: false,
            empty: true,
            customBodyRenderLite: (dataIndex) => {
                return (
                    <AssingDeliveryPerson />
                );
            }
        }
    },
];


export default function OngoingOrderTable() {

    return (
        <>
                <MUIDataTable
                    title="New Orders"
                    data={datatableData}
                    columns={columns}
                    options={{
                        selectableRows:false,
                        filterType: "checkbox",
                    }}
                />
        </>
    );
}
