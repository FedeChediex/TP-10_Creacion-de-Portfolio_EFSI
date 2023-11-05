import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => {
    const [errors, setErrors] = useState({})
    return (
        <div>
            <h1>Contactame</h1>
            <p>Enviame un mensaje</p>
            <Formik
                initialValues={{ email: '', phoneNumber: '', fullName: '', message: '' }}
                validate={values => {
                    
                    if (!values.email) {
                       setErrors(errors.email = { email :'Required'}) 
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                       setErrors(errors.email = { email: 'Invalid email address'})
                    }
                    if (!values.fullName) {
                        setErrors(errors.fullName = {fullName: 'Required'})
                    }
                    if (!values.phoneNumber) {
                        setErrors(errors.phoneNumber = {phoneNumber: 'Required'})
                    } else if (/1234567890/i.test(values.phoneNumber) || values.phoneNumber.length != 8) {
                        setErrors(errors.phoneNumber = {phoneNumber: 'Invalid phone number'})                      
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <p>Correo</p>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />

                        <p>Nombre Completo</p>
                        <Field type="fullName" name="fullName" />
                        <ErrorMessage name="fullName" component="div" />

                        <p>Telefono</p>
                        <Field type="phoneNumber" name="phoneNumber" />
                        <ErrorMessage name="phoneNumber" component="div" />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );

}

export default Contact