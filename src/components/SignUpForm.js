import React from "react";
import { withFormik, Form, Field, setNestedObjectValues } from 'formik';
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';
import './SignUpForm.css';


function SignUpForm({ errors, touched, values }) {
  return (
    <div className='container-signup'>
      <div className="form-cover">
        <Form className="form">
        <h2 className = "loginTitle" > Sign Up </h2> 
        <div className="create-account-header">
          Create your account by filling in the forms.{" "}
        </div>
        <label> Email </label>
        {touched.email && errors.email && <p className="error"> { errors.email } </p>}
        <Field
          className="input"
          type="email"
          name="email"
          placeholder="email"
        />

        <label> User Name </label>
        {touched.username && errors.username && <p className="error"> { errors.username } </p>}
        <Field
          className="input"
          type="text"
          name="username"
          placeholder="username"
        />

        <label> Create a Password </label>
        {touched.password && errors.password && <p className="error"> { errors.password } </p>}
        <Field
          className="input"
          type="password"
          name="password"
          placeholder="*********"
        />

        <label> Confirm Password </label>
        {touched.passwordConfirm && errors.passwordConfirm && <p className="error"> { errors.passwordConfirm } </p>}
        <Field
          className="input"
          type="password"
          name="passwordConfirm"
          placeholder="*********"
        />

        <label> Access Code </label>
        {touched.accessKey && errors.accessKey && <p className="error"> { errors.accessKey } </p>}
        <Field
          className="input"
          type="text"
          name="accessKey"
          placeholder="*********"
        />

        <button type="submit" className="btnSignUp">
            {" "}
            Join{" "}
          </button>
          <p className="already-member">
            {" "}
            Already a member? <Link to="/"> Sign in </Link>
          </p>

        </Form>
      </div>
    </div>
  )
}

const FormikSignUpForm = withFormik({ 
  mapPropsToValues({email, username, password, passwordConfirm, accessKey}) {
    return {
      email: email || '',
      username: username || '',
      password: password || '',
      passwordConfirm: passwordConfirm || '',
      accessKey: accessKey || '',
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email is required.'),
    username: Yup.string().required('Username is required.'),
    password: Yup.string().required('Password please.').min(6),

    passwordConfirm: Yup.string()
    .required("Please confirm password").when('password', {
      is: val => (val && val.length> 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        "Both password need to be the same"
      )
    })
    // .oneOf([Yup.ref("password"), null], "Passwords must match"),
    // accessKey: Yup.string().required('Access code please...')
  }),

  handleSubmit(values, { props, resetForm, setStatus }) {
    console.log("sign up form values =", values);

    let submitValues = {
      email: values.email,
      password: values.password,
      username: values.username,
      accessKey: values.accessKey,
    };

    // console.log(values.email, values.password, values.username, values.accessKey)

    axiosWithAuth()
      .post(`/register`, submitValues)
      .then(res => {
        console.log("Sign up success.. payload:", res.data);
        setStatus(res.data.token)
        localStorage.setItem('token', JSON.stringify(res.data));
        resetForm();
        props.history.push('/');
      })
      .catch(err => console.log('Sign up error', err));
  }
})(SignUpForm);

export default FormikSignUpForm;