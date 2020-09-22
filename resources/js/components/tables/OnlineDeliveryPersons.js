import React, {Component, useState} from 'react';
import {v4 as uuid} from 'uuid';
import moment from 'moment';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LensIcon from '@material-ui/icons/Lens';
import green from '@material-ui/core/colors/green';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "../../theme";
import axios from "axios";

class OnlineDeliveryPersons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            persons : [[]]
        }
    }

    componentDidMount () {
        axios.get('/api/DeliveryPersons').then(response => {
            this.setState({
                persons: response.data
            })
            console.log(response.data);
            console.log(this.state.persons);
        })
    }

    render() {
        const { persons } = this.state
        return (
            <ThemeProvider theme={theme}>
                <Card>
                    <CardHeader
                        title="Delivery Persons"
                    />
                    <Divider/>
                    <List>
                        {persons.map((person,i) => (

                            <ListItem
                                key={i}
                                divider={i < person.length - 1}
                            >

                                <ListItemText
                                    primary={person.name}
                                />


                                <IconButton
                                    edge="end"
                                    size="small"
                                >
                                    <LensIcon style={{color: green[500]}}/>
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        p={2}
                    >
                        <Button
                            color="primary"
                            endIcon={<ArrowRightIcon/>}
                            size="small"
                            variant="text"
                        >
                            View all
                        </Button>
                    </Box>
                </Card>
            </ThemeProvider>
        );
    }
}

export default OnlineDeliveryPersons;
