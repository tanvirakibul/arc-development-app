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
import mobileBackgorund from '../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({

    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition:"center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")] : {
            backgroundImage: `url(${mobileBackgorund})`
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
        [theme.breakpoints.down("md")] : {
            marginLeft: 0,
            marginRight: 0
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        }
    },
     message: {
         border: `2px solid ${theme.palette.common.blue}`,
         marginTop: "2em",
         borderRadius: 5
     },
     sendButton: {
         ...theme.typography.estimate,
         borderRadius: 50,
         height: 45,
         width: 245,
         fontSize: "1rem",
         backgroundColor: theme.palette.common.orange,
         "&:hover": {
             backgroundColor: theme.palette.secondary.light
         }
     }

})); 


export default function Contact(props) {

    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState("");

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState("");

    const [message, setMessage] = useState('');


    const onChange = event => {
        let valid;

        switch (event.target.id) {
            case 'email':
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)

                if (!valid) {
                    setEmailHelper("Invalid Email")
                } else {
                    setEmailHelper("")
                }

                break;
                case 'phone':
                    setPhone(event.target.value)
                    valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)

                    if (!valid){
                        setPhoneHelper("Invalid phone")
                    } else {
                        setPhoneHelper("")
                    }
                    break;
                default:
                    break;

        }
    }

    return (
        <Grid container direction="row">
            {/* Form Section */}
            <Grid item container direction="column"
            justify="center"
            alignItems="center"
            style={{marginBottom: matchesMD ? "5em" : 0,
        marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0}}
             lg={4}
             xl={3}>
                 <Grid item>
                     <Grid item container direction="column">
                <Grid item>
                    <Typography variant="h2"
                    align={matchesMD ? "center" : undefined}
                    style={{lineHeight: 1}}> 
                    Contact Us
                    </Typography>
                    <Typography variant="body1"
                    align={matchesMD ? "center" : undefined}
                    style={{color: theme.palette.common.blue}}>
                        We're waiting.
                    </Typography>
                </Grid>
                <Grid item container
                style={{marginTop: "2em"}}>
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
                <Grid item container
                style={{marginBottom: "2em"}}>
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
                <Grid item container 
                direction="column"
                style={{maxWidth: "20em"}}>
                    <Grid item>
                        <TextField 
                        fullWidth
                        style={{marginBottom: "0.5em"}}
                        label="Name" id="name" value={name}
                        onChange={event => setName(event.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField 
                        fullWidth
                        helperText={emailHelper}
                         style={{marginBottom: "0.5em"}}
                         error={emailHelper.length !==0}
                        label="Email" id="email" value={email}
                        onChange={onChange}/>
                    </Grid>
                    <Grid item>
                        <TextField 
                        fullWidth
                        helperText={phoneHelper}
                         style={{marginBottom: "0.5em"}}
                        label="Phone" id="phone" value={phone}
                        error={phoneHelper.length !==0}
                        onChange={onChange}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth: "20em"}}>
                    <TextField value={message}
                    className={classes.message}
                    InputProps={{disableUnderline: true}}
                    multiline
                     id="message" 
                     rows={3}
                    onChange={event => setMessage(event.target.value)}
                    />
                </Grid>

                <Grid item container
                justify="center"
                 style={{marginTop: "2em"}}>
                    <Button variant="contained"
                    className={classes.sendButton}
                    >Send Message
                    <img src={airplane} alt="paper plane" 
                    style={{marginLeft: "1em"}}
                    /></Button>
                </Grid>
            </Grid>
            </Grid>
            </Grid>




            {/* Call to Action Section */}


            <Grid item container
            direction={matchesMD ? "column" : "row"}
              className={classes.background}
            alignItems="center"
            justify={matchesMD ? "center" : undefined}
             lg={8}
             xl={9}>
                 <Grid item style={{marginLeft: matchesSM ? 0 : "3em", 
        textAlign: matchesMD ? "center" : "inherit"}}>
            <Grid container>
                <Grid item>
                    <Typography variant="h2"
                    align={matchesMD ? "center" : undefined}>
                        Simple Software. <br/> Revolutionary Results.
                    </Typography>
                    <Typography 
                    align={matchesMD ? "center" : undefined}
                    variant="subtitle2" style={{fontSize:"1.5rem"}}>
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
