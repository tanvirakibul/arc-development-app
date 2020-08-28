import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// Stying Objects

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1

  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "20px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  menu: {
    backgroundColor: "#0B72B9",
    color: "white",
    borderRadius: 0
  },
  menuItem : {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIcon : {
    height: "2.5rem",
    width: "2.5rem"
  },
  drawerIconContainer :{
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer : {
    backgroundColor: "#0B72B9"
  },
  drawerItem : {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: "#FFBA60"
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1
    }
  }
}));


export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const i0S = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

// Event Handlers

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const menuOptions = [{name: "Services", link:"/services", activeIndex: 1, selectedIndex: 0},
                        {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1},
                        {name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2},
                        {name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3}
                      ]

  const routes = [{name: "Home", link:"/", activeIndex: 0},
                  {name: "Services", link:"/services", activeIndex: 1,
                  ariaOwns: anchorEl ? 'simple-menu' : undefined,
                  ariaPopup: anchorEl ? "true" : undefined,
                  mouseOver: event => handleClick(event)},
                  {name: "The Revolution", link:"/revolution", activeIndex: 2},
                  {name: "About Us", link:"/about", activeIndex: 3},
                  {name: "Contact Us", link:"/contact", activeIndex: 4},

  ]

                      // Routing COnditions

  useEffect(()=>{

    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if(props.value !== route.activeIndex) {
            props.setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex){
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break;
          case '/estimate':
            props.setValue(5);
            break;
          default:
            break;
      }
    })

}, [props.value, menuOptions, props.selectedIndex, routes, props]);

// Header tabs

const tabs = (
  <React.Fragment>
    <Tabs value={props.value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary">
              {routes.map((route, index)=> (
                <Tab
                key={`${route}${index}`}
                className={classes.tab}
                component={Link}
                to={route.link}
                label={route.name}
                aria-owns={route.ariaOwns}
                aria-haspopup={route.ariaPopup}
                onMouseOver={route.mouseOver} />
              ))}

              </Tabs>
              <Button className={classes.button}
              component={Link}
              to="/estimate"
               variant="contained" color="secondary"
               onClick={()=> props.setValue(5)}>
                Free Estimate
              </Button>
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{paper: classes.menu}}
                MenuListProps = {{onMouseLeave: handleClose}}
                elevation={0}
                style={{zIndex: 1302}}
                keepMounted
                >
                  {menuOptions.map((option, i)=>(
                    <MenuItem
                    key={`${option}${i}`}
                    component={Link}
                    to={option.link}
                    classes={{root: classes.menuItem}}
                    onClick={event => {
                      handleMenuItemClick(event, i);
                      props.setValue(1);
                      handleClose();
                    }}
                    selected = {i === props.selectedIndex && props.value === 1}
                    >
                      {option.name}

                    </MenuItem>

                  ))}

                </Menu>
  </React.Fragment>
)

const drawer = (
  <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!i0S}
      disableDiscovery={i0S}
      open={openDrawer}
      onClose={()=> setOpenDrawer(false)} onOpen={()=> setOpenDrawer(true)}
      classes={{paper: classes.drawer}}
      >
      <div className={classes.toolbarMargin}/>
        <List disablePadding>
        {routes.map(route => (
          <ListItem divider
          key={`${route}${route.activeIndex}`}
          button
          component={Link}
          to={route.link}
          selected={props.value === route.activeIndex}
          classes={{selected: classes.drawerItemSelected}}
          onClick={() => {setOpenDrawer(false);
          props.setValue(route.activeIndex)}}
          >
            <ListItemText disableTypography
            className={classes.drawerItem}
            >{route.name}</ListItemText>
          </ListItem>
        ))}

          <ListItem
          onClick={() => {setOpenDrawer(false); props.setValue(5)}}
          divider
          component={Link}
          classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
           to="/estimate"
          className={classes.drawerItemEstimate}
          selected = {props.value === 5}
          >
              <ListItemText  className={classes.drawerItem}
              disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer}
      onClick={()=> setOpenDrawer(!openDrawer)}
      disableRipple>
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>

  </React.Fragment>
)

// Rendering
    return (
      <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
            <ToolBar disableGutters>
            <Button component={Link} to="/"
            disableRipple
            onClick={()=> props.setValue(0)}
            className={classes.logoContainer}>
              <img alt="Company Logo" className={classes.logo} src={logo} />
            </Button>
              {matches ? drawer : tabs}
            </ToolBar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </React.Fragment>


    );
}
