import * as React from "react";
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Swal} from "../components/Swal";
import {useEffect, useState} from "react";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

function V() {
    return <div style={{height: 24}}/>
}

function validateEmail(value: string) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateUsername(value: string) {
    let error;
    if (value === 'admin') {
        error = 'Nice try!';
    } else if (value === "nani") {
        error = "Nani???"
    }
    return error;
}

const ValidationMsgPlaceholder = React.memo(V)

const initialForm = {
    firstName: "",
    lastName: "",
    email: ""
}

function TestFormik() {

    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        setTimeout(() => {
            setForm({
                firstName: "hihi",
                lastName: "ececec",
                email: "asdasd@gmail.com"
            })
        }, 1000)
    }, [])
    
    return <div className={"row"}>
        <div className={"col-4 offset-4 my-5"}>
            <h1 className={"mb-4"}>Signup</h1>
            <Formik
                enableReinitialize={true}
                initialValues={form}
                validationSchema={SignupSchema}
                onSubmit={(values) => Swal.fire({
                    title: "SUBMIT",
                    confirmButtonText: "HHIHIHIHasd",
                    text: JSON.stringify(values),
                })
                }>
                {({errors, touched}) => (
                    <Form>
                        <Field name="firstName" validate={validateUsername}/>
                        {errors.firstName && touched.firstName
                            ? <ErrorMessage name="firstName"/>
                            : <ValidationMsgPlaceholder/>}
                        <Field name="lastName"/>
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : <ValidationMsgPlaceholder/>}
                        <Field name="email" type="email" validate={validateEmail}/>
                        {errors.email && touched.email ? <div>{errors.email}</div> : <ValidationMsgPlaceholder/>}
                        <button type="submit"
                                className={"btn btn-outline-dark w-100 btn-lg"}>Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
}

export default TestFormik
