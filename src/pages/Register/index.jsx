import React, { Component } from "react";
import RegisterStyle from "./style";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../../services/auth-service";
import { required, vname, vpassword, email } from "./validate";
import { store } from "react-notifications-component";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeName = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.name,
        this.state.email,
        this.state.password
      ).then(
        (response) => {
          this.setState({
            message: response.data.message,
            successful: true,
          });
          store.addNotification({
            title: "Successfully Registered",
            message: `Redirecting to login ...`,
            type: "info",
            container: "center",
            insert: "center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 1000,
              onScreen: false,
            },
          });
          setTimeout(() => {
            this.props.history.push("/login");
            window.location.reload();
          }, 2000);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            successful: false,
            message: resMessage,
          });
        }
      );
    }
  }

  render() {
    return (
      <RegisterStyle>
        <div className="register-page">
          <div className="register-icon">
            <div className="icon-text">Sign Up</div>
            <i className="fas fa-users"></i>
          </div>

          <div className="register-wrap">
            <Form
              onSubmit={this.handleRegister}
              ref={(c) => {
                this.form = c;
              }}
            >
              {!this.state.successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      validations={[required, vname]}
                    />

                    {this.state.message && this.state.message.name ? (
                      <div className={"error-msg"} role="alert">
                        {this.state.message.name}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                    />
                    {this.state.message &&
                    this.state.message.email &&
                    !this.state.message.name ? (
                      <div className={"error-msg"} role="alert">
                        {this.state.message.email}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      validations={[required, vpassword]}
                    />
                    {this.state.message &&
                    this.state.message.password &&
                    !this.state.message.name &&
                    !this.state.message.email ? (
                      <div className={"error-msg"} role="alert">
                        {this.state.message.password}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <button className="btn btn-primary btn-block">
                      Sign Up
                    </button>
                  </div>
                </div>
              )}

              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
            </Form>
          </div>
        </div>
      </RegisterStyle>
    );
  }
}
