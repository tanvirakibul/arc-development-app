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
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

import integrationAnimation from '../animations/integrationAnimation/data.json';

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
    }
}));



export default function MobileApps (props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRation: 'xMidYMid slice'
        }
    }


    return (
        <Grid container direction="column">
        {/* Mobile app development section */}
            <Grid item container 
            direction="row" justify={matchesMD ? "center" : undefined}
            className={classes.rowContainer}>
            {/* Back arrow item */}
            <Hidden mdDown>
                <Grid item className={classes.arrowContainer}
                style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                    <IconButton style={{backgroundColor: "transparent"}}
                    component={Link} to="/customsoftware"
                    onClick={() => props.setSelectedIndex(1)}>
                        <img src={backArrow} alt="Back to Custom Software Page" />
                    </IconButton>
                </Grid>
            </Hidden>
            {/* Text items */}
            <Grid item container direction="column" className={classes.heading}>
                <Grid item>
                    <Typography variant="h2" align={matchesMD ? "center" : undefined}
                    >iOS/Android App Development</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    Mobile apps allow you to take your tools on the go.
                    </Typography>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                    </Typography>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.

                    </Typography>
                    <Typography variant="body1" paragraph
                    align={matchesMD ? "center" : undefined}>
                    Convenience. Connection.
                    </Typography>
                </Grid>
            </Grid>
            {/* Grid item from second arrow */}
            <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
                <IconButton style={{backgroundColor: "transparent"}}
                component={Link} to="/websites"
                onClick={() => props.setSelectedIndex(3)}
                >
                    <img src={forwardArrow} alt=" Forward to Website Development Page" />
                </IconButton>
            </Grid>
            </Hidden>
            </Grid>
            {/* Mobile Apps development section ends */}
            {/* Integration and Support starts */}
            <Grid item container direction={matchesSM ? "column" : "row"} 
            className={classes.rowContainer}
            style={{marginTop: "5em", marginBottom:"5em"}}>
                {/* Integration  starts */}
                <Grid item container
                 direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined}
                         variant="h4" gutterBottom>
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1"
                         align={matchesSM ? "center" : undefined}
                         paragraph>
                        Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                        </Typography>
                        <Typography
                         align={matchesSM ? "center" : undefined}
                         variant="body1" paragraph>
                        This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                {/* Integration  ends */}
                <Grid item>
                    <Lottie options={defaultOptions}
                     style={{ maxWidth: matchesXS ? "15em" : "20em"}} />
                </Grid>
                {/* Support  starts */}
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography 
                         align={matchesSM ? "center" : "right"}
                         variant="h4" gutterBottom>
                        Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                         align={matchesSM ? "center" : "right"}
                         variant="body1" paragraph>
                        Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.
                        </Typography>
                        <Typography 
                         align={matchesSM ? "center" : "right"}
                          variant="body1" paragraph>
                        This significantly reduces costs and creates a more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
                {/* Support  ends */}
            </Grid>
            {/* Section Animation endss */}
            {/* Icons section starts */}
            <Grid item container direction={matchesMD ? "column" : "row"} 
            className={classes.rowContainer}
            style={{marginBottom: "5em"}}>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography variant="h4" align="center" gutterBottom>
                            Extended Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss army knife" />
                    </Grid>
                </Grid>
                {/* icon 2 */}
                <Grid item container direction="column" 
                alignItems="center" 
                style={{marginTop: matchesMD ? "5em" : 0, marginBottom: matchesMD ? "5em" : 0}}
                 md>
                    <Grid item>
                        <Typography variant="h4" align="center" gutterBottom>
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="tear-one-off sign"
                        style={{ maxWidth: matchesXS ? "15em" : "20em"}} />
                    </Grid>
                </Grid>
                {/* icon 3 */}
                <Grid item container direction="column" alignItems="center"  md>
                    <Grid item>
                        <Typography variant="h4" align="center" gutterBottom>
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notifications" />
                    </Grid>
                </Grid>
            </Grid>
            {/* Icons section ends */}

            {/* Call to action starts */}
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )
}
