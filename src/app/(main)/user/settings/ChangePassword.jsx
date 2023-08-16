"use client"
import { Formik, Form } from 'formik'
import React from 'react'

function ChangePassword() {
    const initialValues = {
        oldPassword: "",
        newPassword: ""
    }

    const validationSchema = {};
    const onSubmit = () => {

    }
    return (
        <>
            <div className="card-headers border-0 py-4 px-4 pb-0 pt-1">
                <h4>
                    <i className="fa-solid fa-lock text-primary me-2" />
                    Password Change
                </h4>
            </div>
            <div className="card-body px-4">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >{({ values }) => {
                    return (
                        <Form>
                            <div className="row align-items-center g-3 g-sm-4 pb-3">
                                <div className="col-sm-6">
                                    <label className="form-label">Old Password</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        defaultValue="********"
                                    />
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
                                    <input className="form-control" type="password" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Confirm Password</label>
                                    <input className="form-control" type="password" />
                                </div>
                            </div>
                            <div className="alert alert-info d-flex rounded-4 mb-0">
                                <i className="ai-circle-info fs-xl me-2" />
                                <p className="mb-0">
                                    Password must be minimum 8 characters long - the more, the better.
                                </p>
                            </div>
                            <div className="d-flex justify-content-start pt-3">
                                <button className="btn btn-primary me-3" type="button">
                                    Save changes
                                </button>
                                <button className="btn btn-dark" type="button">
                                    Cancel
                                </button>
                            </div>
                        </Form>
                    )
                }}</Formik>

            </div>
        </>
    )
}

export default ChangePassword