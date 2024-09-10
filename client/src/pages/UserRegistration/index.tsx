import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import * as Yup from 'yup';
import { User } from '../../types/User';
import { useMutation } from '@tanstack/react-query';
import { userRegistration } from '../../services/userRegistration';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const UserRegistration = () => {
  const navigation = useNavigate();

  const { status, mutate, data } = useMutation<any, AxiosError<any, any>, User>({
    mutationFn: userRegistration,
    onSuccess: (data, variables, context) => {
      toast.success("User registered successfully. Please login to browse your book collection.");
    },
    onError(error, variables, context) {
      toast.error(error?.response?.data.error);
    },
  })

  const userRegistrationSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    userName: Yup.string().required('Required'),
    password: Yup.string()
      .min(8, 'Password should be between 8-16 characters')
      .max(16, 'Password should be between 8-16 characters')
      .required('Required'),
  });

  const handleSubmit = (formData: User) => {
    console.log('Form Data Submitted:', formData);
    mutate(formData);

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {status === "pending" ? <Loader /> : null}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <Formik
          initialValues={{ fullName: '', userName: '', password: '' }}
          validationSchema={userRegistrationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({
          }) => (

            <Form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <Field
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage component="div" className='text-red-700' name="fullName"></ErrorMessage>
              </div>
              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
                <Field
                  type="text"
                  name="userName"
                  id="userName"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage component="div" className='text-red-700' name="userName"></ErrorMessage>

              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <ErrorMessage component="div" className='text-red-700' name="password"></ErrorMessage>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserRegistration;
