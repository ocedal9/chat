import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/react-hooks";
// import { useSelector } from "react-redux";
import { FRIEND_PETITION } from "../graphql/mutations";
// import io from "socket.io-client";
// const socket = io("http://localhost:4004");
// socket.on("connect", (data) => {
//   socket.on("skevent", (message) => {
//     console.log(message);
//   });
//   socket.emit("message", { data: "akdjfgkajsdgfkagfkajfg" });
// });
// console.log(socket);

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #61dafb 30%, #9cdef9 90%)",
    border: 0,
    borderRadius: 3,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    height: 48,
    padding: "0 30px",
    margin: theme.spacing(2, 0, 1),
  },
}));

export default function MCprofile(props) {
  const classes = useStyles();
  // const state = useSelector((state) => state);
  // const emisor = state.user.profile.nickname;
  // console.log(props.location);
  // if (props.location.profile) {
  var profparams = props.location.profile.user;
  // contact.email = props.location.profile.user.email;
  var emisor = props.location.cliuser;
  // }
  const [qwer3, { data, loading, error }] = useMutation(FRIEND_PETITION, {
    onCompleted(data) {
      console.log("mutation completed");
    },
  });
  console.log("Send Friendreq", data, loading, error);
  const sendrqst = function (e) {
    e.preventDefault();
    const notin = {};

    notin.target = profparams.id;
    notin.notitype = "Friend Request";
    notin.status = "sended";
    notin.emisor = emisor;

    console.log(notin);

    qwer3({ variables: { notin } });
  };

  // const [qwer3, { data, loading, error }] = useMutation(CONTACT_REQUEST, {
  //   onCompleted(data) {
  //     console.log("completed");
  //   },
  // });
  // console.log("ADD CONTACT", data, loading, error);
  // const sendrqst = function (e) {
  //   e.preventDefault();
  //   const contactnick = {};

  //   contactnick.nickname = profparams.nickname;

  //   console.log(contactnick);

  //   qwer3({ variables: { contactnick } });
  // };
  return (
    <div style={{ color: "white" }}>
      <h1>Profile</h1>
      <p>Nickname: {profparams.nickname}</p>
      <p>Full name: {profparams.fullname}</p>
      <p>Email: {profparams.email}</p>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.root}
        onClick={sendrqst}
      >
        Send friend Request
      </Button>
    </div>
  );
}
