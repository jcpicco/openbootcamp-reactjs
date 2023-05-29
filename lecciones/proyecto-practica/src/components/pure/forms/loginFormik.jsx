import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
    }
);


const Loginformik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    };


    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues = { initialCredentials }
                // *** Yup Validation Schema ***
                validationSchema = {loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // We save the data in the localstorage
                    localStorage.setItem('credentials', values)
                }}
            >

                {/** Props de Formik:
                  * - Values: Valores del formulario
                  * - touched: Saber si el usuario ha tocado alguno de los valores
                  * - errors: Saber si hay errores en los campos
                  * - isSubmitting: Saber si se está enviando la info
                  * - handleChange: Cuando hay algún cambio en algún campo
                  * - handleBlur: Cuando se ha cambiado el foco a otro campo
                  */}
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            {/* Email Errors */}
                            { errors.email && touched.email &&
                                {/** 
                                  * Condiciones: Que haya error y que se haya clickado en el campo email
                                  * 
                                  * <ErrorMessage component="div" name="email" />
                                  * --> {touched.email && error.email ? <div>{error.email}</div> : null}
                                  * 
                                  * <ErrorMessage component="span" name="email" />
                                  * --> {touched.email && error.email ? <span>{error.email}</span> : null}
                                  * 
                                  * <ErrorMessage component={Custom} name="email" />
                                  * --> {touched.email && error.email ? <Custom>{error.email}</Custom> : null}
                                  * 
                                  * <ErrorMessage name="email" />
                                  * This will return a string. React 16+.
                                  * --> {touched.email && error.email ? error.email : null} */}
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )}

                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" placeholder="password" type='password' />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && // Condiciones: Que haya error y que se haya clickado en el campo password
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials...</p>): null}
                        </Form>
                )}
            </Formik>
        </div>
    );
}


export default Loginformik;
