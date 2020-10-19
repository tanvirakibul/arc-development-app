import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './ui/ButtonArrow';

import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles(theme => ({

    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50em"
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
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    }

}));


export default function Contact(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    return (
        <Grid container direction="row">
            {/* Form Section */}
            <Grid item container direction="column"
            justify="center"
             lg={3}>
                <Grid item>
                    <Typography variant="h2"
                    style={{lineHeight: 1}}> 
                    Contact Us
                    </Typography>
                    <Typography variant="body1"
                    style={{color: theme.palette.common.blue}}>
                        We're waiting.
                    </Typography>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <img src={phoneIcon} alt="phone" 
                        style={{marginRight: "0.5em"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1"
                        style={{color: theme.palette.common.blue,
                        fontSize: "1rem"}}>
                            (555) 555-5555
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <img src={emailIcon} alt="envelope" 
                        style={{marginRight: "0.5em",
                        verticalAlign:"bottom"}} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1"
                        style={{color: theme.palette.common.blue,
                            fontSize: "1rem"}}>
                            tanvirakibul@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <TextField label="Name" id="name" value={name}
                        onChange={event => setName(event.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField label="Emaile" id="email" value={email}
                        onChange={event => setEmail(event.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField label="Phone" id="phone" value={phone}
                        onChange={event => setPhone(event.target.value)}/>
                    </Grid>
                </Grid>
                <Grid item>
                    <TextField value={message}
                    multiline
                     id="message" 
                     rows={3}
                    onChange={event => setMessage(event.target.value)}
                    />
                </Grid>

                <Grid item>
                    <Button variant="contained">Send Message
                    <img src={airplane} alt="paper plane" /></Button>
                </Grid>
            </Grid>




            {/* Call to Action Section */}


            <Grid item container  className={classes.background}
            alignItems="center"
            style={{marginTop: "-1em"}}
             lg={9}>
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

           
        </Grid>
    //    Section Grid
    )
}
