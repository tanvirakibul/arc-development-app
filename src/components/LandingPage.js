import React from 'react';
import {Link} from 'react-router-dom';
import Lottie from 'react-lottie';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from './ui/CallToAction';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: 30
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: "#FFBA60",
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    mainContainer: {
        marginTop: "3em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    specialText : {
        fontFamily: "Pacifico",
        color: "#FFBA60"
    },
    subtitle: {
        marginBottom: "1rem"
    },
    icon : {
        marginLeft: "1em",
        [theme.breakpoints.down("xs")] : {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("xs")] : {
            marginTop: "2em",
            padding: 25
        }
    },
    cardContainer: {
        height: "40em", 
        marginTop: "3em"

    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },

    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "5em",
            paddingBottom: "5em",
            paddingLeft: 0,
            paddingRight: 0,
            width: "80%",
            height: "25%"
        }
    },
    infoBackground : {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }

}));


export default function LandingPage(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }
    return (
        <Grid className={classes.mainContainer}
         container direction="column">
        <Grid item>  
        {/*----Hero Block---- */}
            <Grid container justify="flex-end" alignItems="center" direction="row">
                <Grid sm item className={classes.heroTextContainer}>
                    <Typography variant="h2" align="center">Bringing West Coast Technology 
                    <br /> 
                    to the Midest
                    </Typography>
                    <Grid container className={classes.buttonContainer}
                    justify="center">
                        <Grid item>
                            <Button component={Link} to="/estimate"
                            onClick={()=> props.setValue(5)}
                            className={classes.estimateButton}
                            variant="contained">Free Estimate</Button>
                        </Grid>
                        <Grid item>
                            <Button component={Link} to="/revolution"
                            variant="outlined"
                            className={classes.learnButtonHero}>
                            <span style={{marginRight: 3}}
                            onClick={()=> props.setValue(2)}>
                            Learn More
                            </span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sm item className={classes.animation}>
                     <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                </Grid>
            </Grid>
        </Grid> {/*----Hero Block ends---- */}
                
                {/* Services Block starts */}
                
                {/*---Custom Software Services Section---- */}
                <Grid item> 
                {" "}
                    <Grid 
                    justify={matchesSM ? "center" : undefined}
                    className={classes.serviceContainer} 
                    container direction="row">
                        <Grid item style={{marginLeft: matchesSM ? 0 : "5em" ,
                        textAlign: matchesSM ? "center" : undefined}}>
                            <Typography variant="h4">Custom Software Development
                            </Typography>
                            <Typography className={classes.subtitle} 
                            variant="subtitle1">Save Energy. Save Time. Save Money
                            </Typography>
                            <Typography variant="subtitle1">Complete digital solutions, from investigation to {" "}
                            <span className={classes.specialText}>celebration</span>
                            </Typography>
                            <Button component={Link} to="/customsoftware"
                             className={classes.learnButton}
                             onClick={()=> {props.setValue(1); props.setSelectedIndex(1)}}
                            variant="outlined">
                            <span style={{marginRight: 3}}>
                            Learn More
                            </span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
                        </Grid>
                    </Grid>
                </Grid> 
                {/*---Custom Software Services Section Ends---- */}

                 {/*---Mobile App Services Section---- */}
                 <Grid item> 
                {" "}
                    <Grid 
                    justify={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer} 
                    container direction="row">
                        <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
                            <Typography variant="h4">Mobile App Development
                            </Typography>
                            <Typography className={classes.subtitle} 
                            variant="subtitle1">Extend Functionality. Extend Access. Increase Engagement
                            </Typography>
                            <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app
                            {matchesSM? null : <br />} with either mobile platform.
                            </Typography>
                            <Button component={Link} to="/mobileapps"
                             className={classes.learnButton}
                             onClick={()=> {props.setValue(1); props.setSelectedIndex(2)}}
                            variant="outlined">
                            <span style={{marginRight: 3}}>
                            Learn More
                            </span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                            </Button>
                        </Grid>
                        <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                            <img 
                            className={classes.icon} 
                            alt="Mobile Apps icon" 
                            src={mobileAppsIcon} />
                        </Grid>
                    </Grid>
                </Grid> 
                {/*---Mobile App Services Section Ends---- */}

                {/*---Website Services Section---- */}
                <Grid item> 
                {" "}
                    <Grid 
                    justify={matchesSM ? "center" : undefined}
                    className={classes.serviceContainer} 
                    container direction="row">
                        <Grid item style={{marginLeft: matchesSM ? 0 : "5em" ,
                        textAlign: matchesSM ? "center" : undefined}}>
                            <Typography variant="h4">Website Development
                            </Typography>
                            <Typography className={classes.subtitle} 
                            variant="subtitle1">Reach More. Discover More. Sell More.
                            </Typography>
                            <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                            </Typography>
                            <Button  component={Link} to="/websites"
                             className={classes.learnButton}
                             onClick={()=> {props.setValue(1); props.setSelectedIndex(3)}}
                            variant="outlined">
                            <span style={{marginRight: 3}}>
                            Learn More
                            </span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <img 
                            className={classes.icon} 
                            alt="Website icon" 
                            src={websiteIcon} />
                        </Grid>
                    </Grid>
                </Grid> 
                {/*---Website Services Section Ends---- */}

                {/*--- Services Section Ends---- */}

                {/*--- Card Section Starts---- */}
                <Grid item>
                <Grid className={classes.cardContainer}
                container 
                alignItems="center" justify="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid style={{textAlign: "center"}}
                            container direction="column">
                            <Grid item>
                                <Typography variant="h3"
                                gutterBottom>
                                    The Revolution
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    Visionary insights coupled with cutting-edge
                                    Technology is a recipe for revolution
                                </Typography>
                                <Button component={Link} to="/revolution"
                                onClick={()=> props.setValue(2)}
                                style={{marginTop: "1rem"}} className={classes.learnButton}
                            variant="outlined">
                            <span style={{marginRight: 3}}>
                            Learn More
                            </span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                            </Button>
                            </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground}/>
                    </Grid>
                </Grid>
                {/*--- Card Section Ends---- */}

    {/*--- Information Section Starts---- */}

    <Grid item>
        <Grid container style={{height: "41.5em"}} direction="row"
        alignItems="center">
        <Grid item container style={{position: "absolute",
        textAlign: matchesXS? "center" : "inherit"}}
        direction = {matchesXS ? "column" : "row"}
        className={classes.spaceBetweenInfo}>
            <Grid item sm style={{marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em"}}>
                <Grid container style={{marginBottom: matchesXS ? "5em" : 0}}
                direction="column">
                    <Typography variant="h2"
                    style={{color: "white"}}>
                        About Us
                    </Typography>
                    <Typography variant="subtitle2">
                        Let's Get Personal!
                    </Typography>
                    <Grid item>
                    <Button component={Link} to="/about"
                    style={{marginTop: "1rem", color: "white", borderColor: "white"}}
                     className={classes.learnButton}
                     onClick={()=> props.setValue(3)}
                            variant="outlined">
                            <span style={{marginRight: 3}}>
                            Learn More
                            </span>
                            <ButtonArrow width={15} height={15} fill="white" />
                            </Button>
                            </Grid>
                </Grid>
            </Grid>
    {/* Item 2 */}
    <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em"
    , textAlign: matchesXS ? "center" : "right"}}>
                <Grid container direction="column">
                    <Typography variant="h2"
                    style={{color: "white"}}>
                        Contact Us
                    </Typography>
                    <Typography variant="subtitle2">
                        Say Hello!
                    </Typography>
                    <Grid item>
                    <Button component={Link} to="/contact"
                     style={{marginTop: "1rem", color: "white", borderColor: "white"}}
                     className={classes.learnButton}
                     onClick={()=> props.setValue(4)}
                            variant="outlined">
                            <span style={{marginRight: 3}}>
                            Learn More
                            </span>
                            <ButtonArrow width={15} height={15} fill="white" />
                            </Button>
                            </Grid>
                </Grid>
            </Grid>
            </Grid>
            <div className={classes.infoBackground} />
        </Grid>
    </Grid>
    {/*--- Information Section Ends---- */}

        {/* Call to action section starts */}

        <Grid item>
            <CallToAction setValue={props.setValue} />
        </Grid>
        {/* Call to action section starts */}


                {/* Main Grid section Ends */}
        </Grid>
           
    );
}

