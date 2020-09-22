import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../header/Header";
import NewOrders from "../tables/NewOrders";
import OnlineDeliveryPersons from "../tables/OnlineDeliveryPersons";
import OngoingOrders from "../tables/OngoingOrders";
import OrderTable from "../OrderTable";
import Slider from "../slider/Slider"
import NewOrdersWidget from "../widgets/NewOrdersWidget";
import OngoingOrdersWidget from "../widgets/OngoingOrdersWidget";
import OrderCanceledWidget from "../widgets/OrderCanceledWidget";
import TotalOrdersWidget from "../widgets/TotalOrdersWidget";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background:'#f3f5f7',
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Header />
            </AppBar>

            <Slider />

            <main className={classes.content}>
                <Toolbar />
                <page
                    className={classes.root}
                    title="Dashboard"
                >
                    <Container maxWidth={false}>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <NewOrdersWidget />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <OngoingOrdersWidget />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <OrderCanceledWidget />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <TotalOrdersWidget />
                            </Grid>
                            <Grid
                                item
                                lg={9}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <OngoingOrders />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={3}
                                xl={3}
                                xs={3}>
                                <OnlineDeliveryPersons />
                            </Grid>
                            <Grid
                                item
                                lg={9}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <NewOrders />
                            </Grid>
                            <Grid
                                item
                                lg={12}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <OrderTable />
                            </Grid>

                        </Grid>
                    </Container>
                </page>
            </main>
        </div>
    );
}

export default Dashboard;
