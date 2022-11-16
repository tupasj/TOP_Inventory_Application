import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ErrorMessageText } from "./ErrorMessageText";

const SignupForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  
  const closeSignupModal = () => {
    const signupModal = document.querySelector(".signup-modal");
    const passwordMessage = document.querySelector(".password-message");
    passwordMessage.textContent = "";
    signupModal.close();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <dialog className="signup-modal">
        <span className="modal-close" onClick={closeSignupModal}>
          <i className="fa-solid fa-x"></i>
        </span>
        <p className="signup-modal-message">
          Create a Lorem Ipsum Clothing store account
        </p>
        <Form>
          <div className="form-control">
            <label htmlFor="name" />
            <Field type="text" id="name" name="name" placeholder="Name" />
            <ErrorMessage name="name" component={ErrorMessageText} />
          </div>
          <div className="form-control">
            <label htmlFor="email" />
            <Field type="email" id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="password" />
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" />
          </div>
          <div className="password-message"></div>
          <button className="signup-button" type="submit">
            Sign Up
          </button>
        </Form>
      </dialog>
    </Formik>
  );
};

export { SignupForm };
