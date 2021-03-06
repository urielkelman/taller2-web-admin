import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  SHOW_LOGIN_ERROR_MESSAGE,
  SHOW_LOGIN_SPINNER,
} from "../redux/loginReducer";
import { ADD_TOKEN } from "../redux/appReducers";
import { LOGIN_ENDPOINT } from "../vars/endpoints";
import FormContainer from "./FormContainer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
    };

    this.formFields = [
      {
        label: "Email adress",
        type: "text",
        placeholder: "Enter email",
        onChangeAction: (target) =>
          this.setState({ emailAddress: target.value }),
      },
      {
        label: "Password",
        type: "password",
        placeholder: "Enter password",
        onChangeAction: (target) => this.setState({ password: target.value }),
      },
    ];

    // eslint-disable-next-line
    this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.errorEmailText = "Please, enter a valid email.";
    this.notAdminErrorText = "You don't have access permission.";
  }

  setOnSpinner = () => this.props.setSpinner(true);
  setOffSpinner = () => this.props.setSpinner(false);

  generateRequest() {
    let data = {
      email: this.state.emailAddress,
      password: this.state.password,
    };

    let requestHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    let request = new Request(LOGIN_ENDPOINT, {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(data),
    });

    return request;
  }

  processResponse(response) {
    if (response.ok) {
      response.json().then((json) => {
        if (!json.user.admin) {
          this.props.setErrorMessage(true, this.notAdminErrorText);
        } else {
          this.props.setToken(json.login_token);
        }
      });
    } else {
      response.json().then((json) => {
        this.props.setErrorMessage(true, json.message);
      });
    }

    this.setOffSpinner();
  }

  render() {
    if (this.props.loggedIn) return <Redirect to="/home" />;
    return (
      <div className="auth-wrapper">
        <FormContainer
          formHeader="Sign in"
          formFields={this.formFields}
          submitButtonText="Submit"
          extraLinkSuffix="Forgot"
          extraLinkHref="/forgot_password"
          extraLinkText="password?"
          showExtraLink={true}
          errorMessage={this.props.errorMessage}
          showErrorMessage={this.props.showErrorMessage}
          setErrorMessage={this.props.setErrorMessage}
          successMessage={this.props.successMessage}
          showSuccessMessage={this.props.showSuccessMessage}
          setSuccessMessage={this.props.setSuccessMessage}
          errorEmailText={this.errorEmailText}
          generateRequest={this.generateRequest.bind(this)}
          emailAddress={this.state.emailAddress}
          showSpinner={this.props.showSpinner}
          setOnSpinner={this.setOnSpinner.bind(this)}
          processResponse={this.processResponse.bind(this)}
          password={this.state.password}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showErrorMessage: state.loginReducer.showErrorMessage,
    errorMessage: state.loginReducer.errorMessage,
    showSpinner: state.loginReducer.showLoginSpinner,
    loggedIn: state.appReducer.loggedIn,
    successMessage: state.loginReducer.successMessage,
    showSuccessMessage: state.loginReducer.showSuccessMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setErrorMessage: (value, message) => {
      dispatch({
        type: SHOW_LOGIN_ERROR_MESSAGE,
        payload: { showErrorMessage: value, errorMessage: message },
      });
    },

    setSpinner: (value) =>
      dispatch({ type: SHOW_LOGIN_SPINNER, payload: value }),

    setToken: (token) => dispatch({ type: ADD_TOKEN, payload: token }),
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
