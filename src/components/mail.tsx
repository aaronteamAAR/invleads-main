import React from "react ";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

export default function MailForm() {


  interface FormValues {
    fullName: string;
    email: string;
  }

  const signUpForm = () => {
    const submitForm = (values:FormValues) =>{
      console.log(values)
    }
  };



  return (
    <div>
      <Formik 
      initialValues={{fullName: "", email: ""}} 
      onSubmit={submitForm}>
        <Form className="mx-auto flex w-full max-w-sm flex-col justify-center">
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1  block pr-4 font-bold md:mb-0 md:text-right"
              
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <Field
                name="email"
                classNameName="w-full appearance-none rounded border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6 md:flex md:items-center">
            <div className="md:w-1/3">
              <label
                className="mb-1  block pr-4 font-bold md:mb-0 md:text-right"
              >
                Full name
              </label>
            </div>
            <div className="md:w-2/3">
              <Field
                name="fullName"
                classNameName="w-full appearance-none rounded border-2 border-gray-200 bg-white py-2 px-4 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>
          {/* <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3"></div>
                      <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input className="mr-2 leading-tight" type="checkbox" />
                        <span className="text-sm" >
                          Send me your newsletter!
                        </span>
                      </label>
                    </div> */}
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
              className="my-2 px-4 py-2 bg-blue-700 disabled:opacity-50 transition-all duration-300"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
