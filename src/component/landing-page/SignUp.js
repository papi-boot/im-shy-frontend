import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpRequest } from "feature/user/user";
import {
  TextField,
  Box,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Checkbox,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GlobalDataContext } from "context/GlobalData";
import { signUpRequestUtil } from "utils/landing-page/utilsLandingPage";
const SignUp = () => {
  const dispatch = useDispatch();
  const { snackBarRef, setSnackBarOption, setAuthModalTab } = React.useContext(
    GlobalDataContext
  );
  const [showPassword, setShowPassword] = React.useState(false);
  const regexUserName = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
  const [userNameHelperText, setUserNameHelperText] = React.useState(
    "Must contain 1 Uppercase letter, 1 symbol, 1 number and at least 8 characters long."
  );
  const [errorUserName, setErrorUserName] = React.useState(false);
  const [passwordHelperText, setPasswordHelperText] = React.useState("");
  const [
    confirmPasswordHelperText,
    setConfirmPasswordHelperText,
  ] = React.useState("");
  const [isAgree, setIsAgree] = React.useState(false);
  const [isRegistering, setIsRegistering] = React.useState(false);
  const userNameRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const confirmPasswordRef = React.useRef(null);

  // @TODO: Handle sign up request
  const handleSignUpRequest = () => {
    const params = {
      user_name: userNameRef.current.value,
      password: passwordRef.current.value,
      confirm_password: confirmPasswordRef.current.value,
    };
    signUpRequestUtil({
      params,
      httpMethod: "POST",
      routePath: "sign-up",
      signUpRequest,
      dispatch,
      setSnackBarOption,
      snackBarRef,
      setIsRegistering,
      isRegistering,
      setAuthModalTab,
      userNameRef,
      passwordRef,
      confirmPasswordRef
    });
  };
  return (
    <Fragment>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          m: ".5rem 0",
        }}
      >
        <TextField
          inputRef={userNameRef}
          error={errorUserName}
          type="text"
          fullWidth
          variant="outlined"
          label="Username"
          onInput={(e) => {
            if (
              e.target.value.match(regexUserName) &&
              e.target.value.length >= 8
            ) {
              setErrorUserName(false);
              setUserNameHelperText("");
            } else {
              setErrorUserName(true);
              setUserNameHelperText(
                "Must contain 1 Uppercase letter, 1 symbol, 1 number and at least 8 characters long."
              );
            }
          }}
          helperText={
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {userNameHelperText}
            </Box>
          }
          sx={{ my: ".5rem" }}
        />
        <FormControl sx={{ m: ".5rem 0 .1rem 0" }} variant="outlined" fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            inputRef={passwordRef}
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onInput={(e) => {
              if (e.target.value.length >= 6) {
                setPasswordHelperText("");
              } else {
                setPasswordHelperText(
                  "Password should be at least 6 characters long"
                );
              }
            }}
          />
        </FormControl>
        <Box component="span" sx={{ fontSize: "13px", color: "#ff0000" }}>
          {passwordHelperText}
        </Box>
        <FormControl sx={{ mt: "1rem" }} variant="outlined" fullWidth>
          <InputLabel htmlFor="confirm_password">
            Confirm&nbsp;Password
          </InputLabel>
          <OutlinedInput
            inputRef={confirmPasswordRef}
            id="confim_password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
            onInput={(e) => {
              if (e.target.value === passwordRef.current.value) {
                setConfirmPasswordHelperText("");
              } else {
                setConfirmPasswordHelperText("Password don't matched");
              }
            }}
          />
        </FormControl>
        <Box component="span" sx={{ fontSize: "13px", color: "#ff0000" }}>
          {confirmPasswordHelperText}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            flexWrap: "wrap",
            width: "100%",
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              my: 2,
              width: "100%",
            }}
          >
            <div>
              <Checkbox onChange={() => setIsAgree(!isAgree)} />
              &nbsp;
              <Box component="label" sx={{ m: 0, fontSize: ".8rem" }}>
                By registering your account, you agree to our&nbsp;
                <Link to="/terms-conditions">Terms and Conditions</Link>
              </Box>
            </div>
          </Box>
          <LoadingButton
            disabled={!isAgree}
            sx={{ m: 1, width: "100%" }}
            variant="contained"
            fullWidth
            loading={isRegistering}
            onClick={() => handleSignUpRequest()}
          >
            Count me In
          </LoadingButton>
        </Box>
      </Box>
    </Fragment>
  );
};

export default SignUp;
