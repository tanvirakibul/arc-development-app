import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CallToAction from './ui/CallToAction';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")] : {
            paddingLeft: '1.5em',
            paddingRight: "1.5em"
        }
    },
    itemContainer: {
        maxWidth: "40em"
    },
    paragraphContainer : {
        maxWidth: "30em"
    }

}));


export default function Websites(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
          <Grid item container 
            direction="row" justify={matchesMD ? "center" : undefined}
            className={classes.rowContainer}>
            {/* Back arrow item */}
            <Hidden mdDown>
                <Grid item className={classes.arrowContainer}
                style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                    <IconButton style={{backgroundColor: "transparent"}}
                    component={Link} to="/mobileapps"
                    onClick={() => props.setSelectedIndex(2)}>
                        <img src={backArrow} alt="Back to Mobile App Development Page" />
                    </IconButton>
                </Grid>
            </Hidden>
            {/* Text items */}
            <Grid item container direction="column" className={classes.heading}>
                <Grid item>
                    <Typography variant="h2" align={matchesMD ? "center" : undefined}
                    >Website Development</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    Having a website is a necessity in today's business world. They
                    give you one central, piblic location to let people know who you
                    are, what you do, and why you're the best at it.
                    </Typography>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    From simply having your hours posted to having a full
                    fledged online store, making yourself as accessible as
                    possible to users online drives growth and enables you
                    to reach new customers.
                    </Typography>
                </Grid>
            </Grid>
            {/* Grid item from second arrow */}
            <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
                <IconButton style={{backgroundColor: "transparent"}}
                component={Link} to="/services"
                onClick={() => props.setSelectedIndex(0)}
                >
                    <img src={forwardArrow} alt=" Forward to Services Page" />
                </IconButton>
            </Grid>
            </Hidden>
            </Grid>
            {/* Analytics starts */}
            <Grid item container 
            alignItems="center"
            direction={matchesSM ? "column" : "row"  }
            className={classes.rowContainer}
            style={{marginTop: '5em'}} >
            
            <Grid item>
                <Grid container direction ="column">
                    <Grid item>
                        <Typography variant="h4" gutterBottom
                        align={matchesSM ? "center" : undefined}
                        >Analytics</Typography>
                    </Grid>
                    <Grid item>
                        <img src={analytics} 
                        style={{ marginLeft: matchesSM? 0 : "-2.75em"}}
                        alt="graph with magnifying glass revealing 1's and 0's" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.paragraphContainer}>
                <Typography
                paragraph
                variant="body1"
                align={matchesSM ? "center" : undefined}
                >
                    Knowledge is power, and data is 21st Century gold.
                    Analyzing this data can reveal hidden and trends in your
                    business, empowering you to make decisions with measurable effects.
                </Typography>
            </Grid>
            </Grid>
            {/* Analytics ends */}

            {/* Ecomerce section starts */}
            <Grid item container 
            alignItems="center"
            justify = {matchesSM ? "center" : "flex-end"}
            direction={matchesSM ? "column" : "row"  } 
            className={classes.rowContainer} 
            style={{marginBottom: "5em", marginTop: "5em"}}>
            
            <Grid item>
                <Grid container direction ="column">
                    <Grid item >
                        <Typography variant="h4" 
                        align={matchesSM ? "center" : undefined}
                        gutterBottom>
                            E-Commerce
                            </Typography>
                    </Grid>
                    <Grid item>
                        <img src={ecommerce}
                        alt="World outline made of dollar signs" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item
            style={{marginLeft: matchesSM ? 0 : "1em"}}
             className={classes.paragraphContainer}>
                <Typography variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
                >
                It’s no secret that people like to shop online.
                </Typography>
                <Typography variant="body1"
                align={matchesSM ? "center" : undefined}
                paragraph
                >
                In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.                </Typography>
            </Grid>
            </Grid>
            {/* Ecommerce section ends */}
            {/* Outreach starts */}
            <Grid item container 
            alignItems="center"
            direction={matchesSM ? "column" : "row"  } 
            className={classes.rowContainer} >
            
            <Grid item>
                <Grid container direction ="column">
                    <Grid item>
                        <Typography variant="h4"
                        align={matchesSM ? "center" : undefined}
                         gutterBottom>
                            Outreach
                            </Typography>
                    </Grid>
                    <Grid item>
                        <img src={outreach}
                        alt="megapjone" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}}
            className={classes.paragraphContainer}>
                <Typography
                paragraph
                align={matchesSM ? "center" : undefined}
                variant="body1"
                >
                   Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.
                </Typography>
            </Grid>
            </Grid>
            {/* Outreach ends */}
            {/* SEO section starts */}
            <Grid item container 
            alignItems="center"
            justify = "flex-end"
            direction={matchesSM ? "column" : "row"  } 
            className={classes.rowContainer} 
            style={{marginTop: "5em", marginBottom: "5em"}}>
            
            <Grid item>
                <Grid container direction ="column">
                    <Grid item >
                        <Typography variant="h4" 
                        align={matchesSM ? "center" : undefined}
                        gutterBottom>
                            Search Engine <br /> Optimization
                            </Typography>
                    </Grid>
                    <Grid item>
                        <img src={seo}
                        alt="website standing on winner's podium" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item
            style={{marginLeft: matchesSM ? 0 : "1em"}}
             className={classes.paragraphContainer}>
                <Typography variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
                >
                How often have you ever been to the second page of Google results?
                </Typography>
                <Typography variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
                >
                    If you’re like us, probably never.
                </Typography>
                <Typography variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
                >
                    Customers don’t go there either, so we make sure your website is designed to end up on top. 
                </Typography>
            </Grid>
            </Grid>
            {/* SEO section ends */}
            <Grid item>
                <CallToAction
                 />
            </Grid>
        </Grid>
    )

}

