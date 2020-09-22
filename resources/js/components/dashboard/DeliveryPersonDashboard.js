import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../header/Header";
import DeliveryPersonSlider from "../slider/DeliveryPersonSlider";
import MyRateWidget from "../widgets/DeliveryPerson/MyRateWidget";
import CurrentOrdersWidget from "../widgets/DeliveryPerson/CurrentOrdersWidget";
import OrderDeliveredWidget from "../widgets/DeliveryPerson/OrderDeliveredWidget";
import NOrdersWidget from "../widgets/DeliveryPerson/NOrdersWidget";
import DeliveryPersonBody from "../DeliveryPersonBody";

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

function DeliveryPersonDashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Header />
            </AppBar>

            <DeliveryPersonSlider />

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
                                <MyRateWidget />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <CurrentOrdersWidget />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <OrderDeliveredWidget />
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <NOrdersWidget />
                            </Grid>

                            <Grid
                                item
                                lg={12}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <DeliveryPersonBody />
                            </Grid>

                        </Grid>
                    </Container>
                </page>
            </main>
        </div>
    );
}

export default DeliveryPersonDashboard;
