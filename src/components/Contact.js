import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import ButtonArrow from "./ui/ButtonArrow";

import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import mobileBackgorund from "../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackgorund})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: "#FFBA60",
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "2em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }

        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        "https://us-central1-arc-development-app-654e1.cloudfunctions.net/sendMail",
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            message: message,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent successfully!",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something Went Wrong, Please try again!",
          backgroundColor: "#FF3232",
        });
      });
  };

  const buttonContents = (
    <React.Fragment>
      Send Message!
      <img
        src={airplane}
        alt="paper plane"
        style={{
          marginLeft: "1em",
        }}
      />
    </React.Fragment>
  );
  return (
    <Grid container="container" direction="row">
      {/* Form Section */}
      <Grid
        item="item"
        container="container"
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item="item">
          <Grid item="item" container="container" direction="column">
            <Grid item="item">
              <Typography
                variant="h2"
                align={matchesMD ? "center" : undefined}
                style={{
                  lineHeight: 1,
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{
                  color: theme.palette.common.blue,
                }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid
              item="item"
              container="container"
              style={{
                marginTop: "2em",
              }}
            >
              <Grid item="item">
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{
                    marginRight: "0.5em",
                  }}
                />
              </Grid>
              <Grid item="item">
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: "1rem",
                  }}
                >
                  <a
                    href="tel:5555555555"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item="item"
              container="container"
              style={{
                marginBottom: "2em",
              }}
            >
              <Grid item="item">
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{
                    marginRight: "0.5em",
                    verticalAlign: "bottom",
                  }}
                />
              </Grid>
              <Grid item="item">
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: "1rem",
                  }}
                >
                  <a
                    href="mailto:tanvirakibul@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    tanvirakibul@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item="item"
              container="container"
              direction="column"
              style={{
                maxWidth: "20em",
              }}
            >
              <Grid item="item">
                <TextField
                  fullWidth="fullWidth"
                  style={{
                    marginBottom: "0.5em",
                  }}
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item="item">
                <TextField
                  fullWidth="fullWidth"
                  helperText={emailHelper}
                  style={{
                    marginBottom: "0.5em",
                  }}
                  error={emailHelper.length !== 0}
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item="item">
                <TextField
                  fullWidth="fullWidth"
                  helperText={phoneHelper}
                  style={{
                    marginBottom: "0.5em",
                  }}
                  label="Phone"
                  id="phone"
                  value={phone}
                  error={phoneHelper.length !== 0}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid
              item="item"
              style={{
                maxWidth: "20em",
              }}
            >
              <TextField
                value={message}
                className={classes.message}
                InputProps={{
                  disableUnderline: true,
                }}
                multiline="multiline"
                id="message"
                rows={3}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>

            <Grid
              item="item"
              container="container"
              justify="center"
              style={{
                marginTop: "2em",
              }}
            >
              <Button
                variant="contained"
                onClick={() => setOpen(true)}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0 ||
                  phone.length === 0
                }
                className={classes.sendButton}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Dialog Section */}
      <Dialog
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent>
          <Grid container="container" direction="column">
            <Grid item="item">
              <Typography
                align="center"
                variant="h4"
                gutterBottom="gutterBottom"
              >
                Confirm Message!
              </Typography>
            </Grid>

            <Grid item="item">
              <TextField
                fullWidth="fullWidth"
                style={{
                  marginBottom: "0.5em",
                }}
                label="Name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item="item">
              <TextField
                fullWidth="fullWidth"
                helperText={emailHelper}
                style={{
                  marginBottom: "0.5em",
                }}
                error={emailHelper.length !== 0}
                label="Email"
                id="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item="item">
              <TextField
                fullWidth="fullWidth"
                helperText={phoneHelper}
                style={{
                  marginBottom: "0.5em",
                }}
                label="Phone"
                id="phone"
                value={phone}
                error={phoneHelper.length !== 0}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid
            item="item"
            style={{
              maxWidth: "20em",
            }}
          >
            <TextField
              value={message}
              className={classes.message}
              InputProps={{
                disableUnderline: true,
              }}
              multiline="multiline"
              id="message"
              rows={3}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid
            item="item"
            container="container"
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item="item">
              <Button
                color="primary"
                style={{ fontWeight: 300 }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item="item">
              <Button
                variant="contained"
                onClick={onConfirm}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  email.length === 0 ||
                  phone.length === 0
                }
                className={classes.sendButton}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      {/* Call to Action Section */}
      <Grid
        item="item"
        container="container"
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item="item"
          style={{
            marginLeft: matchesSM ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container="container">
            <Grid item="item">
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{
                  fontSize: "1.5rem",
                }}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid
                container="container"
                justify={matchesSM ? "center" : undefined}
                item="item"
              >
                <Button
                  component={Link}
                  to="/revolution"
                  style={{
                    marginTop: "1rem",
                  }}
                  className={classes.learnButton}
                  onClick={() => props.setValue(2)}
                  variant="outlined"
                >
                  <span
                    style={{
                      marginRight: 3,
                    }}
                  >
                    Learn More
                  </span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.primary.main}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item="item">
          <Button
            component={Link}
            to="/estimate"
            onClick={() => props.setValue(5)}
            className={classes.estimateButton}
            variant="contained"
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
