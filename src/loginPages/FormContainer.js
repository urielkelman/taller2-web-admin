import React, { Component } from "react";

import GeneralForm from "./GeneralForm";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line
    this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  }

  validateEmail() {
    return this.emailRegex.test(this.props.emailAddress);
  }

  processRequest(request) {
    this.props.setOnSpinner();
    fetch(request)
      .then((response) => this.props.processResponse(response))
      .catch();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.validateEmail()) {
      this.props.setErrorMessage(true, this.props.errorEmailText);
      return;
    }

    if(this.props.password.length < 4 || !/\d/.test(this.props.password)){
      this.props.setErrorMessage(true, "Your password should have at least four characters and a number.")
      return;
    }

    let request = this.props.generateRequest();
    this.processRequest(request);

  }

  render() {
    return (
      <div className="auth-inner">
        <GeneralForm
          formHeader={this.props.formHeader}
          handleSubmit={this.handleSubmit.bind(this)}
          formFields={this.props.formFields}
          submitButtonText={this.props.submitButtonText}
          extraLinkSuffix={this.props.extraLinkSuffix}
          extraLinkHref={this.props.extraLinkHref}
          extraLinkText={this.props.extraLinkText}
          showExtraLink={this.props.showExtraLink}
          errorMessage={this.props.errorMessage}
          showError={this.props.showErrorMessage}
          setErrorMessage={this.props.setErrorMessage}
          successMessage={this.props.successMessage}
          showSuccess={this.props.showSuccessMessage}
          setSuccessMessage={this.props.setSuccessMessage}
          showSpinner={this.props.showSpinner}
        />
      </div>
    );
  }
}

export default FormContainer;
