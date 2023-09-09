import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Checkbox from '@mui/material/Checkbox';
import { ErrorMessageText } from './ErrorMessageText';
import ClothesAPI from '../../utils/api/ClothesAPI';

const SignupForm = () => {
  const [signedUp, setSignedUp] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('This field is required.')
      .min(2, 'Name should be a minimum of 2 characters.')
      .max(50, 'Please enter a name of 50 characters or less'),
    email: Yup.string()
      .email('Invalid email format.')
      .required('This field is required.'),
    password: Yup.string()
      .required('This field is required.')
      .min(8, 'Passwords should be a minimum of 8 characters.')
      .max(100, 'Please enter a password of 100 characters or less.'),
  });

  const onSubmit = (values) => {
    ClothesAPI.createUser(values);
  };

  const successfulSignupNotice = () => {
    const signupModalMessage = document.querySelector('.signup-modal-message');
    signupModalMessage.textContent = 'Signup successful!';
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
          <Form className="grow flex flex-col justify-evenly items-center gap-[15px] text-center">
            <div className="w-full">
              <div className="form-control">
                <label htmlFor="name" />
                <Field
                  className="form-input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <ErrorMessage name="name" component={ErrorMessageText} />
              </div>
              <div className="form-control">
                <label htmlFor="email" />
                <Field
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component={ErrorMessageText} />
              </div>
              <div className="form-control">
                <label htmlFor="password" />
                <Field
                  className="form-input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component={ErrorMessageText} />
              </div>
              <div className="password-message hidden text-red"></div>
            </div>
            <div>
              <div className="flex items-start">
                <Checkbox />
                <div className="pt-2 text-sm text-left">
                  By creating an account, you confirm that you are aged 18 years
                  or above and you agree to be bound by our
                  <span className="hover:underline hover:cursor-pointer text-left text-extra-dark-blue">
                    {' '}
                    Privacy Policy{' '}
                  </span>
                  and
                  <span className="hover:underline hover:cursor-pointer text-left text-extra-dark-blue">
                    {' '}
                    Terms of Use
                  </span>
                </div>
              </div>
              <div className="flex items-start">
                <Checkbox />
                <div className="pt-2 text-sm text-left">
                  I'd like to be informed of exclusive membership benefits,
                  coupons worth up to 15% off, personalized promotions and more!
                </div>
              </div>
            </div>
            <button
              className="p-1 w-3/4 rounded-md bg-peach-light hover:bg-peach-dark"
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
