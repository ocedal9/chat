import React from "react";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_ROOM } from "../graphql/mutations";

export default function MCgroup() {
  const state = useSelector((state) => state);
  const contacts = state.contacts;
  const allusers = state.allusers;
  const conts = [...contacts];
  const contArray = [];
  for (const cont of conts) {
    const contNick = allusers.find((element) => element.id === cont);
    const contObj = {};
    contObj.contId = cont;
    contObj.contNick = contNick.nickname;
    contArray.push(contObj);
  }
  console.log(contArray);
  const [qwer5, { data, loading }] = useMutation(CREATE_ROOM, {
    onCompleted(data) {
      console.log(data);
    },
  });
  console.log("creating room", data, loading);

  const cregrou = function (e) {
    e.preventDefault();
    const htmlElem = document.getElementsByClassName("checkbox");
    const htmlArray = Array.from(htmlElem);
    const membArray = [state.user.profile.id];
    for (const element of htmlArray) {
      if (element.checked) {
        membArray.push(element.value);
      }
    }
    console.log(membArray);
    const gname = e.target.elements.groupname.value;
    console.log(gname);
    const roomi = {};
    roomi.title = gname;
    roomi.type = "group";
    roomi.admin = state.user.profile.id;
    roomi.members = membArray;
    const date = new Date();
    const stringDate = date.toString();
    roomi.createdAt = stringDate;
    roomi.updatedAt = stringDate;
    qwer5({ variables: { roomi } });
  };

  return (
    <div>
      <h1 style={{ color: "#61dafb" }}>
        Select the group`s members by checking the boxes and click create.
      </h1>
      <br></br>
      <form
        onSubmit={cregrou}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {!contArray ? (
          <p>Add contacts</p>
        ) : (
          <div>
            {contArray.map((conta) => (
              <div key={conta.contId}>
                <input
                  style={{ float: "left" }}
                  type="checkbox"
                  className="checkbox"
                  value={conta.contId}
                ></input>
                <label
                  style={{ float: "left", color: "white" }}
                  htmlFor={conta.contId}
                >
                  {conta.contNick}
                </label>
                <br></br>
              </div>
            ))}
          </div>
        )}

        <TextField
          //   className={classes.text}
          style={{ width: "20vw" }}
          variant="outlined"
          margin="normal"
          // fullWidth
          id="groupname"
          label="Group's name"
          name="groupname"
          placeholder="type here..."
          autoComplete="off"
          autoFocus
        />
        {/* <label style={{ float: "left", color: "white" }}>Group Name</label>
        <br></br> */}
        {/* <input
          style={{ float: "left", margin: "10px 0px 0px 1px", width: "20vw" }}
          type="submit"
          value="Create"
        ></input> */}
        <Button
          style={{ color: "black", width: "20vw" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Create
        </Button>
      </form>
    </div>
  );
}
