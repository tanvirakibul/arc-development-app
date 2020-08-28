import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme=> ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
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
        marginTop: "5em",
        [theme.breakpoints.down("xs")] : {
            marginTop: "2em",
            padding: 25
        }
    },

}));


export default function Services(props){

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
             {/* Services Block starts */}
             {/* title */}
             <Grid item style={{marginLeft: matchesSM ? 0 : "5em",
             marginTop: matchesSM ? "1em" : "3em"}}>
                 <Typography variant="h2" gutterBottom
                 align={matchesSM ? "center" : undefined}
                 >Services</Typography>
             </Grid>
             {/* title ends */}
                {/*---Mobile App Services Section---- */}
                <Grid item> 
                {" "}
                    <Grid 
                    justify={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer} 
                    container direction="row"
                    style={{marginTop: matchesSM ? "-1em" : "3em"}}>
                        <Grid item style={{textAlign: matchesSM ? "center" : undefined,
                        width: matchesSM? undefined : "35em"}}>
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
                            src={mobileAppsIcon}
                            width="250em" />
                        </Grid>
                    </Grid>
                </Grid> 
                {/*---Mobile App Services Section Ends---- */}
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


                {/*---Website Services Section---- */}
                <Grid item> 
                {" "}
                    <Grid 
                    justify={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer} 
                    container direction="row"
                    style={{marginBottom: "3em"}}>
                        <Grid item style={{textAlign: matchesSM ? "center" : undefined,
                        width: matchesSM? undefined : "35em"}}>
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
                        <Grid item style={{marginRight: matchesSM ? 0 : "5em" ,}}>
                            <img 
                            className={classes.icon} 
                            alt="Website icon" 
                            src={websiteIcon} 
                            width="250em"
                            />
                        </Grid>
                    </Grid>
                </Grid> 
                {/*---Website Services Section Ends---- */}
        </Grid>
    );
}