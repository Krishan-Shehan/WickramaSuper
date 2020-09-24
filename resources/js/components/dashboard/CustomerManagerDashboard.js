import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../header/Header";
import Slider from "../slider/CustomerSlider"
import customerTable from "../tables/CustomerManager/customerTable";



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

function CustomerManagerDashboard() {
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


                            </Grid>

                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}>


                            </Grid>

                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}>


                            </Grid>

                            <Grid
                                item
                                lg={3}
                                sm={6}
                                xl={3}>


                            </Grid>


                            <Grid
                                item
                                lg={12}
                                sm={6}
                                xl={3}
                                xs={12}
                            >

                            </Grid>

                            <Grid
                                item
                                lg={12}
                                sm={6}
                                xl={3}
                                xs={12}
                            >
                                <customerTable />
                            </Grid>



                        </Grid>
                    </Container>
                </page>
            </main>
        </div>
    );
}

export default CustomerManagerDashboard;
