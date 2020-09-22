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
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import theme from "../../../theme";
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

const NOrdersWidget = ({ className, ...rest }) => {
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
                            New Orders
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            0
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <ShoppingBasketIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </ThemeProvider>
    );
};

NOrdersWidget.propTypes = {
    className: PropTypes.string
};

export default NOrdersWidget;
