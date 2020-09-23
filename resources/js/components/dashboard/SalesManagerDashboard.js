import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../header/Header";
import Slider from "../slider/SalesManagerSlider";
import SalesTable from "../tables/SalesManager/SalesTable";
import ExpensesTable from "../tables/SalesManager/ExpensesTable";
import PaymentsTable from "../tables/SalesManager/PaymentsTable";
import SalesWidget from "../widgets/SalesManager/SalesWidget";
import ExpensesWidget from "../widgets/SalesManager/ExpensesWidget";
import PaymentWidget from "../widgets/SalesManager/PaymentWidget";
import ProfitWidget from "../widgets/SalesManager/ProfitWidget";


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

function SalesManagerDashboard() {
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
                                xl={3}>
                                <SalesWidget />

                            </Grid>

                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}>
                                <ExpensesWidget />

                            </Grid>

                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}>
                                <PaymentWidget />

                            </Grid>

                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}>
                                <ProfitWidget />

                            </Grid>


                            <Grid
                                item
                                lg={12}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <SalesTable />
                            </Grid>

                            <Grid
                                item
                                lg={12}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <PaymentsTable />
                            </Grid>

                            <Grid
                                item
                                lg={12}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <ExpensesTable />
                            </Grid>

                        </Grid>
                    </Container>
                </page>
            </main>
        </div>
    );
}

export default SalesManagerDashboard;
