import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import callApi from "../../api/callApi";
import { setSession, setUsername } from "../../utils/store";
import { addProfile } from "../../redux/action";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "40%",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    paddingTop: "10px",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [accountError, setAccountError] = React.useState("");
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUser = (text) => {
    setUsernameError("");
    setAccountError("");
    setUser(text.target.value);
    console.log(user);
  };

  const handlePassword = (text) => {
    setPasswordError("");
    setAccountError("");
    setPassword(text.target.value);
    console.log(user);
  };

  const checkInput = (username, password) => {
    if (username === "") {
      setUsernameError("Bạn chưa nhập mã số sinh viên!");
    }
    if (password === "") {
      setPasswordError("Bạn chưa nhập mật khẩu!");
    }
  };

  const preLogin = async (username, password) => {
    if (username === "" || password === "") {
      checkInput(username, password);
    } else {
      const params = {
        command: "login",
        method: "POST",
        param: {
          username: username,
          password: password,
        },
      };

      const res = await callApi(params);

      if (res.status === "Ok") {
        await setSession(res.accessToken);
        await setUsername(username);
        handleClose();

        const params = {
          command: "personal_informations",
          username: username,
          method: "GET",
          param: {},
        };
        const result = await callApi(params);
        dispatch(addProfile(result));

        window.location.reload();
      } else {
        setAccountError("Sai mã số sinh viên hoặc mật khẩu!");
      }
    }
  };

  return (
    <div>
      <Button size="large" color="inherit" onClick={handleOpen}>
        <div className="button_title">Login</div>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.input}>
              <FormControl variant="outlined" fullWidth={true} size="medium">
                <InputLabel htmlFor="component-outlined">
                  <div style={{ fontSize: 23 }}>Mã số sinh viên</div>
                </InputLabel>
                <OutlinedInput
                  id="username"
                  value={user}
                  onChange={handleUser}
                  placeholder="Mã số sinh viên"
                  labelWidth={170}
                />
              </FormControl>
              <FormHelperText id="component-error-text" error={true}>
                <div style={{ marginBottom: 25, fontSize: 15 }}>
                  {usernameError}
                </div>
              </FormHelperText>
              <FormControl variant="outlined" fullWidth={true} size="medium">
                <InputLabel htmlFor="component-outlined">
                  <div style={{ fontSize: 23 }}>Mật khẩu</div>
                </InputLabel>
                <OutlinedInput
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  labelWidth={105}
                  placeholder="Mật khẩu"
                  type="password"
                />
              </FormControl>
              <FormHelperText id="component-error-text" error={true}>
                <div style={{ marginBottom: 15, fontSize: 15 }}>
                  {passwordError}
                </div>
              </FormHelperText>
            </div>
            <FormHelperText id="component-error-text" error={true}>
              <div style={{ marginBottom: 15, fontSize: 15 }}>
                {accountError}
              </div>
            </FormHelperText>
            <Button
              type="button"
              style={{
                backgroundColor: "#3E81DC",
                color: "#FFF",
                padding: 10,
                fontSize: 18,
              }}
              onClick={() => preLogin(user, password)}
            >
              Đăng nhập
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
