import axios from 'axios'
import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

class stockTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stocks: [[]],
            msg: null,
            flash:false,
            alert: null,
        }
    }

    componentDidMount () {
        axios.get('/api/Stocks').then(response => {
            this.setState({
                stocks: response.data
            })
            console.log(response.data);
            console.log(this.state.stocks);
        })
    }


    onSuccess(){
        this.componentDidMount();
    }



    render () {
        const { stocks } = this.state
        const columns = [
            {
                name: "id",
                label: "ID",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "product_name",
                label: "Product name",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "quantity",
                label: "Quantity",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "cost_price",
                label: "Cost Price",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "selling_price",
                label: "Selling price",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "current_stock",
                label: "Current stock",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "availability",
                label: "Availability",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "exp-date",
                label: "Expiry date",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "brand_id",
                label: "Brand id",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "category_id",
                label: "Category id",
                options: {
                    filter: true,
                    sort: true,
                }
            },

            {
                name: "product_image",
                label: "Product Image",
                options: {
                    filter: true,
                    sort: true,
                }
            },

            {
                name: "category_name",
                label: "Category name",
                options: {
                    filter: true,
                    sort: true,
                }
            },

            {
                name: "brand_name",
                label: "Brand name",
                options: {
                    filter: true,
                    sort: true,
                }
            },

            {
                name: "supplier_name",
                label: "Supplier name",
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
                name: "supplier_add",
                label: "Supplier Address",
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: "reminder",
                label: "Reminder",
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
                title={"STOCK"}
                data={stocks}
                columns={columns}
                options={options}
            />


        )
    }
}

export default stockTable
