import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography,
    colors,
    makeStyles
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import {ThemeProvider} from "@material-ui/styles";
import theme from "../../../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    avatar: {
        backgroundColor: colors.lightGreen[600],
        height: 56,
        width: 56
    },
    differenceIcon: {
        color: colors.red[900]
    },
    differenceValue: {
        color: colors.red[900],
        marginRight: theme.spacing(1)
    }
}));

const PaymentWidget = ({ className, ...rest }) => {
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
                                PAYMENTS
                            </Typography>
                            <Typography
                                color="textPrimary"
                                variant="h3"
                            >
                                4.3
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar className={classes.avatar}>
                                <ReceiptIcon/>
                            </Avatar>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </ThemeProvider>
    );
};

PaymentWidget.propTypes = {
    className: PropTypes.string
};

export default PaymentWidget;
