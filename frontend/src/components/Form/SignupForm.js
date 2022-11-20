import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrorMessageText } from "./ErrorMessageText";
import ClothesAPI from "../../utils/api/ClothesAPI";

const SignupForm = () => {
  const [signedUp, setSignedUp] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("This field is required.")
      .min(2, "Name should be a minimum of 2 characters.")
      .max(50, "Please enter a name of 50 characters or less"),
    email: Yup.string()
      .email("Invalid email format.")
      .required("This field is required."),
    password: Yup.string()
      .required("This field is required.")
      .min(8, "Passwords should be a minimum of 8 characters.")
      .max(100, "Please enter a password of 100 characters or less."),
  });

  const onSubmit = (values) => {
    ClothesAPI.createUser(values);
  };

  const successfulSignupNotice = () => {
    const signupModalMessage = document.querySelector(".signup-modal-message");
    signupModalMessage.textContent = "Signup successful!";
    setSignedUp(true);
  };

  let validationActive = false;
  return (
    <>
      {!signedUp && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={validationActive}
          validateOnChange={validationActive}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values);
            resetForm();
            successfulSignupNotice();
          }}
        >
          <Form>
            <div className="form-control">
              <label htmlFor="name" />
              <Field type="text" id="name" name="name" placeholder="Name" />
              <ErrorMessage name="name" component={ErrorMessageText} />
            </div>
            <div className="form-control">
              <label htmlFor="email" />
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component={ErrorMessageText} />
            </div>
            <div className="form-control">
              <label htmlFor="password" />
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component={ErrorMessageText} />
            </div>
            <div className="password-message"></div>
            <button
              className="signup-button"
              type="submit"
              onClick={() => (validationActive = true)}
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      )}
    </>
  );
};

export { SignupForm };
