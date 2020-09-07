import React from "react";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import { Link, useRouteMatch } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useMutation } from "@apollo/react-hooks";
// import { CREATE_ROOM } from "../graphql/mutations";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: "linear-gradient(45deg, #61dafb 30%, #9cdef9 90%)",
//     border: 0,
//     borderRadius: 3,
//     // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "black",
//     height: 48,
//     padding: "0 30px",
//     margin: theme.spacing(2, 0, 1),
//   },
// }));

export default function MCcontact(props) {
  // const state = useSelector((state) => state);
  // const userNick = state.user.profile.nickname;
  // console.log(userNick);
  // const classes = useStyles();
  // let { url } = useRouteMatch();
  // console.log(url);
  const contact = props.location.state.user;

  // const [qwer4, { data, loading, error }] = useMutation(CREATE_ROOM, {
  //   onCompleted(data) {
  //     console.log(data);
  //   },
  // });

  // console.log("creating room", data, loading, error);

  // const creRoom = function (e) {
  //   // const roomi = {};
  //   // roomi.title = userNick + "+" + contact.nickname;
  //   // roomi.type = "1v1";
  //   // roomi.admin = userNick;
  //   // roomi.members = [userNick, contact.nickname];
  //   // const date = new Date();
  //   // const stringDate = date.toString();
  //   // roomi.createdAt = stringDate;
  //   // roomi.updatedAt = stringDate;
  //   // console.log(roomi);
  //   // qwer4({ variables: { roomi } });
  // };

  return (
    <div style={{ color: "white" }}>
      <h1>Contact</h1>
      <h3>Nickname: {contact.nickname}</h3>
      <h3>Fullname: {contact.fullname}</h3>
      <h3>Email: {contact.email}</h3>
      {/* <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.root}
        component={Link}
        to={{
          pathname: "/dashboard/conversation",
          state: { contact },
        }}
        // onClick={creRoom}
      >
        Start conversation
      </Button> */}
    </div>
  );
}
