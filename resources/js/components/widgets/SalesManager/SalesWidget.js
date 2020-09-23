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
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import {ThemeProvider} from "@material-ui/styles";
import theme from "../../../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    avatar: {
        backgroundColor: colors.lightBlue[600],
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

const SalesWidget = ({ className, ...rest }) => {
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
                                SALES
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
                                <TrendingUpIcon/>
                            </Avatar>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </ThemeProvider>
    );
};

SalesWidget.propTypes = {
    className: PropTypes.string
};

export default SalesWidget;
