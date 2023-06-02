import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@mui/material';

// Models
import { Contact } from '../../../models/contact.class';


const RegisterFormik = () => {
    let contact = new Contact();

    const history = useHistory();

    const login = () => {
        history.push('/login');
    }

    const initialValues = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirm: '' // to confirm password
    }

    const registerSchema = Yup.object().shape({
        name: Yup.string()
            .max(32, 'Name too long')
            .required('Name is required'),
        lastName: Yup.string()
            .max(64, 'Last Name too long')
            .required('Last Name is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password too short')
            .required('Password is required'),
        confirm: Yup.string()
            .when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: () => Yup.string().oneOf(
                    [Yup.ref("password")],
                    '¡Passwords must match!'
                )
            }).required('You must confirm the password')
    });

    const submit = (values) => {
        alert('Register user')
    }


    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {registerSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    history.push('/login');
                }}
            >

            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field id="name" type="text" name="name" placeholder="Your name" />
                            
                            {/* name Errors */}
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component='div'></ErrorMessage>
                                )
                            }
                            
                            <label htmlFor="lastName">Last name</label>
                            <Field id="lastName" type="text" name="lastName" placeholder="Your last name" />
                            
                            {/* lastName Errors */}
                            {
                                errors.lastName && touched.lastName && 
                                (
                                    <ErrorMessage name="lastName" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" placeholder="password" type='password'/>

                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="confirm">Password</label>
                            <Field id="confirm" name="confirm" placeholder="confirm passsword" type='password'/>

                            {/* Confirm Password Errors */}
                            {
                                errors.confirm && touched.confirm && 
                                (
                                    <ErrorMessage name="confirm" component='div'></ErrorMessage>
                                )
                            }

                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>): null}
                        </Form>
                    )
            }
            </Formik>
            <hr/>
            <Button variant="contained" onClick={ login }>Login</Button>
        </div>
    );
}


export default RegisterFormik;
