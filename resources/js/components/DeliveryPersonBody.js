import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Divider, List} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    btn:{
        '& > *': {
            margin: theme.spacing(0.3),
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const tiers = [
    {
        title: 'Oder Ref : 1234',
        price: 'R2',
        Name : ['Mr.Krishan shehan','kkk'],
        Contact : '0767158801',
        Address: '34/25 kelaninadee rd,mulleriyawa north new town',
    },
    {
        title: 'Oder Ref : 1234',
        price: 'R2',
        Name : ['Mr.Krishan shehan','kkk'],
        Contact : '0767158801',
        Address: '34/25 kelaninadee rd,mulleriyawa north new town',
    },
    {
        title: 'Oder Ref : 1234',
        price: 'R2',
        Name : ['Mr.Krishan shehan','kkk'],
        Contact : '0767158801',
        Address: '34/25 kelaninadee rd,mulleriyawa north new town',
    },
];


export default function deliveryPersonBody() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: 'center' }}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                           Route : {tier.price}
                                        </Typography>
                                    </div>
                                    <ul >
                                        <Typography component="li" variant="subtitle1" align="left" >
                                            Address : {tier.Address}
                                        </Typography>
                                    </ul>
                                    <Divider />
                                </CardContent>
                                <CardActions>
                                    <List dense className={classes.root}>
                                        {tier.Name.map((line) => {
                                            return (
                                                <ListItem key={line} button>
                                                    <ListItemText primary={line} />
                                                    <ListItemSecondaryAction>
                                                        <Checkbox
                                                            edge="end"
                                                        />
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </CardActions>
                                <Divider />
                                <CardActions>
                                    <div className={classes.btn}>
                                    <Button variant="contained" size="small">Packing</Button>
                                    <Button variant="contained" color="primary" size="small">
                                        Ongoing
                                    </Button>
                                    <Button variant="contained" color="secondary" size="small">
                                        Deliverd
                                    </Button>
                                    </div>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* Footer */}
            {/* End footer */}
        </React.Fragment>
    );
}
