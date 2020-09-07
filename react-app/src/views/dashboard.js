import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import { PrimarySearchAppBar as Topdrawer } from "../components/Topdrawer";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SimpleExpansionPanel from "../components/Exppanel";
import MainContent from "../components/MainContent";
import { GET_USERS, GET_ROOMS } from "../graphql/queries";
// import { GET_CONTACTS } from "../graphql/queries";
// import { setcontacts } from "../features/contacts/contactsSlice";

import { useQuery } from "@apollo/react-hooks";
import { useDispatch } from "react-redux";
import { setallusers } from "../features/user/allUsersSlice";
import { setRooms } from "../features/rooms/roomsSlice";

// import io from "socket.io-client";
// const socket = io.connect("ws://localhost:4003");

const darktheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#61dafb",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },

    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  // const useStyles = createMuiTheme({
  //   palette: {
  //     type: "dark",
  //   },
  root: {
    flexGrow: 1,
    height: "100%",
  },

  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.primary,
    // height: "calc(100%-0px)",
    height: "91vh",
  },
  exppanel: {
    height: "91vh",
    overflow: "auto",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    // display: flex,
    // align-items: center,
  },
  // leftdrawer: {
  //   padding: theme.spacing(7),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  item: {
    color: "#61dafb",
    padding: "10px, 30px",
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 0),
  },
  // submit: {
  // margin: theme.spacing(3, 0, 2),
  // },
}));
// function getting_user() {
// }
// export const UsersContext = React.createContext();
// export const UserClientContext = React.createContext();

export default function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loading, error } = useQuery(GET_USERS, {
    onCompleted(data) {
      dispatch(setallusers(data.getallusers));
    },
  });
  // console.log("in dashboard all users", data, loading, error);

  useQuery(GET_ROOMS, {
    onCompleted(data1) {
      dispatch(setRooms(data1));
    },
  });
  // console.log("getting rooms", data1, loading1, error1);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    // <UsersContext.Provider value={usarray}>
    <ThemeProvider theme={darktheme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid
          container
          justify="space-between"
          spacing={0}
          alignItems="stretch"
          // className={classes.root}
        >
          <Grid item xs={12}>
            <Topdrawer />
          </Grid>
          <Grid item xs={2} className={classes.exppanel}>
            <SimpleExpansionPanel />
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>
              <MainContent />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
    // </UsersContext.Provider>
  );
}
