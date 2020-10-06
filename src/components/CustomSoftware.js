import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import CallToAction from './ui/CallToAction';


import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import documentAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data';
import roots from "../assets/root.svg";


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
    }

}));


export default function CustomSoftware(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }

    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }

    const automationOptions = {
        loop: true,
        autoplay: true,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }

    const uxOptions = {
        loop: true,
        autoplay: true,
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }


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
                    component={Link} to="/services"
                    onClick={() => props.setSelectedIndex(0)}>
                        <img src={backArrow} alt="Back to Service Page" />
                    </IconButton>
                </Grid>
            </Hidden>
            {/* Text items */}
            <Grid item container direction="column" className={classes.heading}>
                <Grid item>
                    <Typography variant="h2" align={matchesMD ? "center" : undefined}
                    >Custom Software Development</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
                    </Typography>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work.
Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.

                    </Typography>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.

                    </Typography>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    We create exactly what you what, exactly how you want it.
                    </Typography>
                </Grid>
            </Grid>
            {/* Grid item from second arrow */}
            <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
                <IconButton style={{backgroundColor: "transparent"}}
                component={Link} to="/mobileapps"
                onClick={() => props.setSelectedIndex(2)}
                >
                    <img src={forwardArrow} alt=" Forward to i0S / Abdroid App Development" />
                </IconButton>
            </Grid>
            </Hidden>
            </Grid>
            {/* Mobile app text ends */}

    {/* Icons */}
    <Grid item container direction="row" justify="center"
    style={{marginTop: "4em", marginBottom: "4em"}}
    className={classes.rowContainer}>
        <Grid item container direction="column" alignItems="center" md style={{maxWidth: "40em"}}>
            <Grid item>
                <Typography variant="h4">Save Energy</Typography>
            </Grid>
            <Grid item>
                <img src={lightbulb} alt="lightbulb" />
            </Grid>
        </Grid>
        {/* Icon 2 */}
        <Grid item container direction="column"
         alignItems="center" md 
         style={{maxWidth: "40em", marginTop: matchesSM ? "5em" : 0,
                marginBottom: matchesSM ? "5em" : 0}}>
            <Grid item>
                <Typography variant="h4">Save Time</Typography>
            </Grid>
            <Grid item>
                <img src={stopwatch} alt="stopwatch" />
            </Grid>
        </Grid>
        {/* Icon 3 */}
        <Grid item container direction="column" alignItems="center" md style={{maxWidth: "40em"}}>
            <Grid item>
                <Typography variant="h4">Save Money</Typography>
            </Grid>
            <Grid item>
                <img src={cash} alt="cash" />
            </Grid>
        </Grid>
    </Grid>
    {/* Icon Ends */}

        {/* Digital Documnents and scale animation section */}

        <Grid item container 
        className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
         justify="space-around">
            <Grid item container 
            className={classes.itemContainer}
            direction={matchesSM ? "column" : "row"}
            style={{marginBottom: matchesMD ? "5em" : 0}} md>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" align={matchesSM ? "center" : undefined}
                        >Digital Documents & Data</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph
                        align={matchesSM ? "center" : undefined}>
                        Reduce Errors. Reduce Waste. Reduce Costs.
                        </Typography>
                        <Typography variant="body1" paragraph
                        align={matchesSM ? "center" : undefined}>
                        Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                        </Typography>
                        <Typography variant="body1" paragraph
                        align={matchesSM ? "center" : undefined}>
                        By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
                        </Typography>
                    </Grid>
                </Grid>
                {/* Section animation */}
                <Grid item md>
                    <Lottie options={documentsOptions} style={{maxHeight: 275,
                    maxWidth: 275, minHeight: 250 }} />
                </Grid>
            </Grid>
                {/* Digital documents section ends */}
        {/* Scale section starts */}
        <Grid className={classes.rowContainer}
        item container 
        direction={matchesSM ? "column" : "row"} md>
        {/* Section animation */}
        <Grid item md>
                    <Lottie options={scaleOptions} style={{maxHeight: 260,
                    maxWidth: 280 }} />
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" 
                        align={matchesSM ? "center" : "right"}
                        >Scale</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph 
                        align={matchesSM ? "center" : "right"}>
                        Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
                        </Typography>
                    </Grid>
                </Grid>
                
            </Grid>
        {/* Scale section ends */}
        </Grid>

        {/* First two section ends */}
        
        {/* Root-cause analysis sectionn starts */}
        
        <Grid className={classes.rowContainer}
        item container direction="row" style={{marginTop: "5em",
                marginBottom: "5em"}}>
            <Grid item container direction="column" alignItems="center">
                <Grid item>
                    <img src={roots} alt="tree with roots extending ourt"
                    height={matchesSM ? "300em" : "450em" }
                    width={matchesSM ? "300em" : "450em" } />
                </Grid>
                <Grid item className={classes.itemContainer}>
                    <Typography variant="h4" align="center" gutterBottom>Root-Cause Analysis</Typography>
                    <Typography variant="body1" align="center" paragraph>
                    Many problems are merely symptoms of larger, underlying issues.
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                    We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

         {/* Root-cause analysis sectionn ends */}
        
        {/* Automation and UX section */}
        {/* Automation section */}

        <Grid className={classes.rowContainer}
        item container 
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined} 
        justify="space-around"
                style={{marginBottom: "5em"}}>
            <Grid item container className={classes.itemContainer}
            style={{marginBottom: matchesMD ? "5em": 0}}
            direction={matchesSM ? "column" : "row"} md>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4"
                        align={matchesSM ? "center" : undefined}>
                        Automation</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph
                        align={matchesSM ? "center" : undefined}>
                        Why waste time when you don’t have to?
                        </Typography>
                        <Typography variant="body1" paragraph
                        align={matchesSM ? "center" : undefined}>
                        We can help you identify processes with time or event based actions which can now easily be automated.
                        </Typography>
                        <Typography variant="body1" paragraph
                        align={matchesSM ? "center" : undefined}>
                        Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
                        </Typography>
                    </Grid>
                </Grid>
                {/* Section animation */}
                <Grid item md>
                    <Lottie options={automationOptions} style={{maxHeight: 290,
                    maxWidth: 280}} />
                </Grid>
            </Grid>
                {/* automation section ends */}
        {/* ux section starts */}
        <Grid className={classes.rowContainer}
        item container 
        
        direction={matchesSM ? "column" : "row"} md>
        {/* Section animation */}
        <Grid item md>
                    <Lottie options={uxOptions} style={{maxHeight: 310,
                    maxWidth: 155 }} />
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" 
                        align={matchesSM ? "center" : "right"}
                        >
                        User Experience Design
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph 
                        align={matchesSM ? "center" : "right"}>
                        A good design that isn’t usable isn’t a good design.
                        </Typography>
                        <Typography variant="body1" paragraph 
                        align={matchesSM ? "center" : "right"}>
                        So why are so many pieces of software complicated, confusing, and frustrating?
                        </Typography>
                        <Typography variant="body1" paragraph 
                        align={matchesSM ? "center" : "right"}>
                        By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.
                        </Typography>
                    </Grid>
                </Grid>
                
            </Grid>
        {/* Aux section ends */}
        </Grid>
        {/* Automation and ux section ends */}
        
        {/* Call to action page */}
        <Grid item>
            <CallToAction setValue={props.setValue} />
        </Grid>

            {/*Call to action Page ends */}

        </Grid>
    );
}