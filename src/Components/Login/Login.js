import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <Field
              name={"login"}
              component={"input"}
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
            ></Field>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <Field
              name={"password"}
              component="input"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            ></Field>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <div className="form-check">
              <Field
                name={"rememberMe"}
                component="input"
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              ></Field>
              <label className="form-check-label" htmlFor="gridCheck1">
                Remember me
              </label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "contact",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="col-6">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
    </div>
  );
};

export default Login;
