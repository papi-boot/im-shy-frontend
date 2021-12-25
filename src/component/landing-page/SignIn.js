/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInRequest } from "feature/user/user";
import {
  TextField,
  Box,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GlobalDataContext } from "context/GlobalData";
import { signInRequestUtil } from "utils/landing-page/utilsLandingPage";
const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const { snackBarRef, setSnackBarOption, authModalRef } = React.useContext(GlobalDataContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLogging, setIsLogging] = React.useState(false);
  const userNameRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  // @TODO: handle sing in request
  const handleSignInRequest = () => {
    const params = {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };
    signInRequestUtil({
      params,
      httpMethod: "POST",
      routePath: "sign-in",
      userNameRef,
      passwordRef,
      snackBarRef,
      setSnackBarOption,
      setIsLogging,
      dispatch,
      signInRequest,
      history,
      authModalRef,
    });
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          m: ".5rem 0",
        }}
      >
        <TextField
          inputRef={userNameRef}
          type="text"
          fullWidth
          defaultValue={user.user_name}
          variant="outlined"
          label="Username"
          sx={{ my: ".5rem" }}
        />
        <FormControl sx={{ my: ".5rem" }} variant="outlined" fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            inputRef={passwordRef}
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            width: "100%",
            mt: 1,
          }}
        >
          <LoadingButton
            variant="contained"
            loading={isLogging}
            fullWidth
            onClick={() => handleSignInRequest()}
          >
            Sign in
          </LoadingButton>
        </Box>
      </Box>
    </Fragment>
  );
};

export default SignIn;
