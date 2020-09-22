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
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import theme from "../../../theme";
import {ThemeProvider} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    avatar: {
        backgroundColor: colors.green[600],
        height: 56,
        width: 56
    },
    differenceIcon: {
        color: colors.green[900]
    },
    differenceValue: {
        color: colors.green[900],
        marginRight: theme.spacing(1)
    }
}));

const CurrentOrdersWidget = ({ className, ...rest }) => {
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
                            Ongoing Orders
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            4
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <ShopTwoIcon />
                        </Avatar>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
        </ThemeProvider>
    );
};

CurrentOrdersWidget.propTypes = {
    className: PropTypes.string
};

export default CurrentOrdersWidget;
