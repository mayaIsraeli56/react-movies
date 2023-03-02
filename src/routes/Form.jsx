import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navigation from "./Navigation";
import "../App.css";

const Form = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "at least 6 characters long")
      .max(20, "at most 20 characters long"),
  });

  return (
    <div>
      <Navigation disable={"Form"}></Navigation>
      <h1>Form</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-box">
              <label htmlFor="email">Email.....</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p> {errors.email && touched.email && errors.email} </p>
            </div>

            <div className="form-box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                autoComplete="on"
              />
             <p> {errors.password && touched.password && errors.password}</p>
            </div>
            <button class="button-6" role="button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
