import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#0B72B9",
        width: "100%",
        xIndex: 1302,
        position : 'relative'
    },
    adornment: {
        width: "23em",
        verticalAlign : "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "1rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3rem"
    },
    icon: {
        height: "3em",
        width: "3em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em"
        }
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em"
        }
    }
}
));

export default function Footer(props) {
    const classes = useStyles()

    return <footer className={classes.footer}>
    <Hidden mdDown>
    <Grid justify="center" container className={classes.mainContainer}>
        {/*First Column*/}
        <Grid item className={classes.gridItem}>
            <Grid container direction="columns" spacing={2}>
                <Grid item 
                onClick={() => props.setValue(0)}
                component={Link} to="/" 
                className={classes.link}>
                Home
                </Grid>
            </Grid>
        </Grid>
    {/*Second Column*/}
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item 
                onClick={() => {props.setValue(1);
                props.setSelectedIndex(0)}}
                component={Link} to="/services"  className={classes.link}>
                    Services
                </Grid>
                <Grid item 
                onClick={() => {props.setValue(1);
                props.setSelectedIndex(1)}}
                component={Link} to="/customsoftware"  className={classes.link}>
                    Custom Software Development
                </Grid>
                <Grid item 
                onClick={() => {props.setValue(1);
                props.setSelectedIndex(2)}}
                component={Link} to="/mobileapps"  className={classes.link}>
                    Mobile App Development
                </Grid>
                <Grid item 
                onClick={() => {props.setValue(1);
                props.setSelectedIndex(3)}}
                component={Link} to="/websites"  className={classes.link}>
                    Website Development
                </Grid>
            </Grid>
        </Grid>

    {/*Third Column*/}
            <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item 
                onClick={() => props.setValue(2)}
                component={Link} to="/revolution"  className={classes.link}>
                    The Revolution
                </Grid>
                <Grid item 
                onClick={() => props.setValue(2)}
                component={Link} to="/revolution"  className={classes.link}>
                    Vision
                </Grid>
                <Grid item 
                onClick={() => props.setValue(2)}
                component={Link} to="/revolution"  className={classes.link}>
                    Technology
                </Grid>
                <Grid item 
                onClick={() => props.setValue(2)}
                component={Link} to="/revolution"  className={classes.link}>
                    Process
                </Grid>
            </Grid>
        </Grid>

    {/*Fourth Column*/}
            <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item 
                onClick={() => props.setValue(3)}
                component={Link} to="/about"  className={classes.link}>
                    About Us
                </Grid>
                <Grid item 
                onClick={() => props.setValue(3)}
                component={Link} to="/about"  className={classes.link}>
                    History
                </Grid>
                <Grid item 
                onClick={() => props.setValue(3)}
                component={Link} to="/about"  className={classes.link}>
                    Team
                </Grid>
            </Grid>
        </Grid>
{/*Fifth Column*/}
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item 
                onClick={() => props.setValue(3)}
                component={Link} to="/contact"  className={classes.link}>
                    Contact Us
                </Grid>
            </Grid>
        </Grid>
      {/*Main Grid Ends*/}
    </Grid>
    </Hidden>
    <img
    className={classes.adornment} alt="Black Shape"
    src={footerAdornment}/>

    {/* Footer Icons */}
    <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={"a"} href="https://wwww.facebook.com"
        rel="noopener noreferrer" target="_blank">
                <img alt="facebook logo" src={facebook}
                    className={classes.icon}
                />
        </Grid>
        <Grid item component={"a"} href="https://twitter.com/"
        rel="noopener noreferrer" target="_blank">
                <img alt="twitter logo" src={twitter}
                    className={classes.icon}
                />
        </Grid>
        <Grid item component={"a"} href="https://www.instagram.com/"
        rel="noopener noreferrer" target="_blank">
                <img alt="instagram logo" src={instagram}
                    className={classes.icon}
                />
        </Grid>
    </Grid>
    </footer>
}
