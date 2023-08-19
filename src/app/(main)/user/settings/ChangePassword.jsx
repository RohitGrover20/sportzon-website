"use client"
import Loading from '@/components/Loading'
import config from '@/config'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"

function ChangePassword() {
    const [loading, setLoading] = useState(false)
    const initialValues = {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    }

    const validationSchema = Yup.object({
        oldPassword: Yup.string().required("Old Password is required"),
        newPassword: Yup.string().matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*[\]{}()?"\\,><':;|_~`=+-])[a-zA-Z\d!@#$%^&*[\]{}()?"\\,><':;|_~`=+-]{6,99}$/,
            'Must contain at least 6 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number'
        ).required("New Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    })
    const onSubmit = (values, { resetForm }) => {
        setLoading(true)
        axios.post(`${config.API_URL}/landing/auth/password-change`, values, { withCredentials: true }).then((result) => {
            toast.success(result.data && result.data && result.data.message, {
                position: "top-right",
                autoClose: 2000,
                onClose: () => {
                    resetForm()
                    setLoading(false)
                },
            })
        }).catch((err) => {
            setLoading(false)
            toast.error(err.response.data && err.response.data && err.response.data.message, {
                position: "top-right",
                autoClose: 2000,
                onClose: () => {
                    resetForm()
                    setLoading(false)
                },
            })
        })
    }
    return (
        <>
            <ToastContainer />
            <div className="card-headers border-0 py-4 px-4 pb-0 pt-1">
                <h4>
                    <i className="fa-solid fa-lock text-primary me-2" />
                    Password Change
                </h4>
            </div>
            {loading ? <Loading /> :
                <div className="card-body px-4">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ values, setFieldValue, errors, dirty, isValid }) => {
                            return (
                                <Form>
                                    <div className="row align-items-center g-3 g-sm-4 pb-3">
                                        <div className="col-sm-6">
                                            <label className="form-label">Old Password</label>
                                            <Field
                                                className="form-control"
                                                name="oldPassword"
                                                type="password"
                                            />
                                            <ErrorMessage name="oldPassword" render={(msg) => <small className='text-danger'>{msg}</small>}></ErrorMessage>
                                        </div>
                                        <div className="col-sm-6">
                                            <a
                                                href="account-password-recovery.html"
                                                className="fw-semibold text-primary d-flex mt-sm-4"
                                            >
                                                <i className="fa-solid fa-question me-2" />
                                                Lost My Password
                                            </a>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label">New Password</label>
                                            <Field className="form-control" type="password"
                                                name="newPassword"
                                            />
                                            <ErrorMessage name="newPassword" render={(msg) => <small className='text-danger'>{msg}</small>}></ErrorMessage>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="form-label">Confirm Password</label>
                                            <Field name="confirmPassword" className="form-control" type="password" />
                                            <ErrorMessage name="confirmPassword" render={(msg) => <small className='text-danger'>{msg}</small>}></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start pt-3">
                                        <button className="btn btn-primary me-3">
                                            Save changes
                                        </button>
                                        <button className="btn btn-secondary" type="reset">
                                            Cancel
                                        </button>
                                    </div>
                                </Form>
                            )
                        }}</Formik>

                </div>
            }
        </>
    )
}

export default ChangePassword