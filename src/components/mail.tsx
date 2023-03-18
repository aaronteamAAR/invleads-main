import React from "react ";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Label from "./Label";

export default function MailForm() {


  interface FormValues {
    fullName: string;
    email: string;
  }


  const signUpSchema = Yup.object({
    fullName: Yup.string() 
    .min(3, 'Too short')
    .max(20, 'Too long')
    .required('Required!'),
    email: Yup.string().email("Invaild email").required("Required!")
  })
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

 

  return (
    <div>
      <Formik 
      initialValues={{fullName: "", email: ""}} 
      onSubmit={onSubmit}
      validationSchema={signUpSchema}>
             {(formik) => (
        <Form className="w-64 bg-gray-50 p-4 flex flex-col shadow-sm">
        <h2 className="text-center text-2xl font-bold">
          Sign up for our newsletter!
        </h2>
       

        <div className="my-2 flex flex-col">
          <Label text="Full-name" htmlFor="fullName" />
          <Field
            id="fullName"
            className="p-2 border-2 border-gray-400"
            name="lastName"
          ></Field>
          <ErrorMessage
            component="div"
            className="text-red-700"
            name="fullName"
          />
        </div>

        <div className="my-2 flex flex-col">
          <Label text="Email" required={true} htmlFor="email" />
          <Field
            id="email"
            className="p-2 border-2 border-gray-400"
            name="email"
          ></Field>
          <ErrorMessage
            component="div"
            className="text-red-700"
            name="email"
          />
        </div>
        <button
          disabled={!formik.isValid || !formik.dirty}
          type="submit"
          className="disabled:opacity-50 my-2 px-4 py-2 bg-blue-700 text-white transition-all duration-300"
        >
          Submit
        </button>
      </Form>
        )}
      </Formik>
    </div>
  );
}
