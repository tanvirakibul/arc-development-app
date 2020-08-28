import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "41.5em",
        width: "100%",
        [theme.breakpoints.down("md")] : {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit"
        }
    },
    estimateButton : {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: "#FFBA60",
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")] : {
            marginLeft: 0,
            marginRight: 0
        }
    }

}));

export default function CallToAction(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return <Grid container alignItems="center"
justify={matchesSM ? "center" : "space-between"}
    className={classes.background}
    direction={matchesSM ? "column" : "row"}>
        <Grid item style={{marginLeft: matchesSM ? 0 : "5em", 
        textAlign: matchesSM ? "center" : "inherit"}}>
            <Grid container>
                <Grid item>
                    <Typography variant="h2">
                        Simple Software. <br/> Revolutionary Results.
                    </Typography>
                    <Typography variant="subtitle2" style={{fontSize:"1.5rem"}}>
                        Take advantage of the 21st Century.
                    </Typography>
                    <Grid container justify={matchesSM ? "center" : undefined} item>
                    <Button component={Link} to="/revolution"
                     style={{marginTop: "1rem"}}
                     className={classes.learnButton}
                     onClick={()=> props.setValue(2)}
                            variant="outlined">
                            <span style={{marginRight: 3}}>
                            Learn More
                            </span>
                            <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
                            </Button>
                            </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Button component={Link} to="/estimate"
            onClick={()=> props.setValue(5)}
             className={classes.estimateButton} variant="contained">
                Free Estimate
            </Button>
        </Grid>
    </Grid>
}