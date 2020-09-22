import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography,
    makeStyles,
    colors
} from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import theme from "../../theme";
import {ThemeProvider} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    root: {
        height: '100%'
    },
    avatar: {
        backgroundColor: colors.indigo[600],
        height: 56,
        width: 56
    }
}));

const TotalOrdersWidget = ({ className, ...rest }) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                    spacing={3}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                        >
                            TOTAL Orders
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            20
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <LocalMallIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </ThemeProvider>
    );
};

TotalOrdersWidget.propTypes = {
    className: PropTypes.string
};

export default TotalOrdersWidget;
