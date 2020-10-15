import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import GroupIcon from '@material-ui/icons/Group';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 240

const user = {
    avatar: './avatar_12.png',
    jobTitle: 'Sales Manager',
    name: 'Nethmi Nimesha'
};

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    avatar: {
        cursor: 'pointer',
        width: 64,
        height: 64
    }
}));

function SalesManagerSlider() {
    const classes = useStyles();
    return(
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <Box
                    alignItems="center"
                    display="flex"
                    flexDirection="column"
                    p={2}
                >
                    <Avatar
                        className={classes.avatar}
                        src={user.avatar}
                    />
                    <Typography
                        className={classes.name}
                        color="textPrimary"
                        variant="h5"
                    >
                        {user.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {user.jobTitle}
                    </Typography>
                </Box>
                <Divider />
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                          <ReceiptIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sales" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonPinIcon />
                        </ListItemIcon>
                        <ListItemText primary="Payments" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Overhead Expenses" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Calender" />
                    </ListItem>
                </List>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </div>
        </Drawer>

    );
}

export default SalesManagerSlider;
