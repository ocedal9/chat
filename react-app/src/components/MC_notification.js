import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/react-hooks";
import { useSelector } from "react-redux";
import { CONTACT_ACC, CREATE_ROOM } from "../graphql/mutations";
// import io from "socket.io-client";
// const socket = io("http://localhost:4003");
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

export default function MCnoti(props) {
  const classes = useStyles();
  const noti = props.location.state.noti;
  // console.log(noti);
  const state = useSelector((state) => state);
  const emisor = noti.emisor;
  const emisorUser = state.allusers.find((user) => user.nickname === emisor);
  const emisorId = emisorUser.id;
  const userId = state.user.profile.id;
  // console.log(emisorId);

  const [qwer3, { data: data1, loading: loading1 }] = useMutation(CONTACT_ACC, {
    onCompleted(data1) {
      console.log("completed");
    },
  });
  console.log("creating room", data1, loading1);

  const [qwer4, { data, loading }] = useMutation(CREATE_ROOM, {
    onCompleted(data) {
      console.log(data);
    },
  });
  console.log("ADD CONTACT", data, loading);

  const accept = function (e) {
    e.preventDefault();
    const contactid = {};

    contactid.id = emisorId;

    const roomi = {};
    roomi.title = userId + "+" + emisorId;
    roomi.type = "1v1";
    roomi.admin = userId;
    roomi.members = [userId, emisorId];
    const date = new Date();
    const stringDate = date.toString();
    roomi.createdAt = stringDate;
    roomi.updatedAt = stringDate;
    // console.log(contactid, roomi);

    qwer3({ variables: { contactid } });
    qwer4({ variables: { roomi } });
  };
  return (
    <div style={{ color: "white" }}>
      <h1>Friend request</h1>
      <p>
        {noti.emisor} has send you a friend request, click to accept or decline.
      </p>
      <Button
        style={{ margin: "20px" }}
        type="submit"
        variant="contained"
        color="primary"
        className={classes.root}
        onClick={accept}
      >
        Accept
      </Button>
      <Button
        style={{ margin: "20px" }}
        type="submit"
        variant="contained"
        color="primary"
        className={classes.root}
        // onClick={sendrqst}
      >
        Decline
      </Button>
    </div>
  );
}
