import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

import { Form, Field , withFormik } from "formik";
import * as Yup from "yup";
import './SignUpForm.css';

function LoginForm({ errors, touched }) {
  return (
    <div className="container-signup">
      <div className="form-cover">
        <Form className="form">
          <h2 className="loginTitle">Login</h2>
          <label>User Name</label>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field
            name="username"
            type="text"
            className="input"
            placeholder="User Name"
          />

          <label>Password</label>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field 
            name="password"
            type="password"
            className="input"
            placeholder="********"
          />
          <button type="submit" className="btnSignUp">Login</button>
          <p className="notMember">Sign Up Here: <Link to="/signup">Sign Up</Link> </p>
        </Form>
      </div>
    </div>
  )
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("I'm not a Jedi, cannot read minds..."),
    password: Yup.string().required("OK, do you want me to guess your password...")
  }),
  handleSubmit(values, { resetForm, setStatus, props }) {
    let submitValues = {
      username: values.username,
      password: values.password
    }
 console.log(values.username, values.password)
    axiosWithAuth()
      .post('/login', submitValues)
      .then(res => {
        console.log(
          "login success, login Payload =",
          res.data.token,
          res.data.message
        );
        setStatus(res.data.token);
        resetForm();
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        props.history.push("/welcome");
      })
      .catch(err => console.log(err.response));
  }
})(LoginForm);

export default FormikLoginForm;
