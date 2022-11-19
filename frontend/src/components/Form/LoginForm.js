import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrorMessageText } from "./ErrorMessageText";
import ClothesAPI from "../../utils/api/ClothesAPI";

const LoginForm = (props) => {
  const setCurrentUser = props.setCurrentUser;
  const closeLoginModal = props.closeLoginModal;
  const [generalError, setGeneralError] = useState('');

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format.")
      .required("This field is required."),
    password: Yup.string()
      .required("This field is required.")
      .min(8, "Passwords should be a minimum of 8 characters.")
      .max(100, "Please enter a password of 100 characters or less."),
  });

  const onSubmit = async (values) => {
    console.log("values: ", values);
    const currentUser = await ClothesAPI.verifyUserCredentials(values.email, values.password);
    if (!currentUser) {
      setGeneralError("The current account does not exist in our records. Please try a different username and/or password.");
    } else if (currentUser) {
      setCurrentUser(currentUser);
      closeLoginModal();
    }
  };

  let validationActive = false;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={validationActive}
      validateOnChange={validationActive}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        {generalError && <ErrorMessageText>{generalError}</ErrorMessageText>}
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
          className="login-button"
          type="submit"
          onClick={() => (validationActive = true)}
        >
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export { LoginForm };
