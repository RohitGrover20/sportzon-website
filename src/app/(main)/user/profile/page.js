"use client"
import React, { useContext, useState } from "react"
import { UserContext } from "../../../../../context/context"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { s_a, state_arr } from "@/components/CIties"
import axios from "axios"
import config from "@/config"
import Loading from "@/components/Loading"

function Profile() {
	const [loader, setLoader] = useState(false)
	const context = useContext(UserContext)
	const user = context && context.data
	const initialValues = {
		firstName: (user && user.firstName) || "",
		lastName: (user && user.lastName) || "",
		email: (user && user.email) || "",
		mobile: (user && user.mobile) || "",
		gender: (user && user.gender) || "",
		state: (user && user.state) || "",
		city: (user && user.city) || "",
		pincode: (user && user.pincode) || "",
	}
	const phoneRegExp =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
	const validationSchema = Yup.object({
		firstName: Yup.string().required("First Name is required"),
		lastName: Yup.string().required("Last Name is required"),
		email: Yup.string().email("Invalid Email").required("Email is required"),
		mobile: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Mobile is required"),
	})

	const onSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			setLoader(true)
			const profile = await axios.post(`${config.API_URL}/landing/auth/profile-update`, values, {
				withCredentials: true,
			})
			if (profile) {
				setLoader(false)
				toast.success(profile && profile.data && profile.data.message, {
					position: "top-right",
					autoClose: 2000,
					onClose: () => {
						setSubmitting(false)
						resetForm(true)
						window.open(`${config.API_URL}/auth/logout`, "_self")
					},
				})
			} else {
				setLoader(false)
				toast.error("Couldn't proceed. Try again later", {
					position: "top-right",
					autoClose: 2000,
					onClose: () => {
						setSubmitting(false)
						resetForm(true)
					},
				})
			}
		} catch (err) {
			setLoader(false)
			toast.error("Couldn't proceed. Try again later", {
				position: "top-right",
				autoClose: 2000,
				onClose: () => {
					setSubmitting(false)
					resetForm(true)
				},
			})
		}
	}

	return (
		<div className="dash-wrapsw card border-0 rounded-4 mb-4 shadow-lg">
			<div className="card-header">
				<h3>Personal Information</h3>
			</div>
			<ToastContainer />
			{!user || loader ? (
				<Loading />
			) : (
				<div className="card-body">
					<Formik
						enableReinitialize
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						{({ values, dirty, isValid }) => {
							return (
								<Form>
									<div className="row row-cols-1 row-cols-sm-2 mt-3">
										<div className="col mb-3">
											<label className="mb-1">
												First Name <small className="text-danger">*</small>
											</label>
											<Field
												name="firstName"
												className="form-control lg"
												type="text"
												placeholder="Enter first name"
												required=""
											/>
											<ErrorMessage
												name="firstName"
												render={(msg) => <small className="text-danger">{msg}</small>}
											></ErrorMessage>
										</div>
										<div className="col mb-3">
											<label className="mb-1">
												Last Name <small className="text-danger">*</small>
											</label>
											<Field
												name="lastName"
												className="form-control lg"
												type="text"
												placeholder="Enter last name"
												required=""
											/>
											<ErrorMessage
												name="lastName"
												render={(msg) => <small className="text-danger">{msg}</small>}
											></ErrorMessage>
										</div>
										<div className="col mb-3">
											<label className="mb-1">
												Mobile Number <small className="text-danger">*</small>
											</label>
											<Field
												name="mobile"
												className="form-control lg"
												type="number"
												placeholder="Enter mobile number"
												required=""
											/>
											<ErrorMessage
												name="mobile"
												render={(msg) => <small className="text-danger">{msg}</small>}
											></ErrorMessage>
										</div>
										<div className="col mb-3">
											<label className="mb-1">
												Email Address <small className="text-danger">*</small>
											</label>
											<Field
												name="email"
												className="form-control lg"
												type="email"
												placeholder="Enter email address"
												required=""
											/>
											<ErrorMessage
												name="email"
												render={(msg) => <small className="text-danger">{msg}</small>}
											></ErrorMessage>
										</div>
										<div className="col mb-3">
											<label className="mb-1">Gender</label>
											<Field as="select" name="gender" className="form-select">
												<option>Male</option>
												<option>Female</option>
											</Field>
										</div>
										<div className="col mb-3">
											<label className="mb-1">State</label>
											<Field as="select" className="form-select rounded-1" name="state">
												{state_arr &&
													state_arr.map((item) => {
														return <option key={item}>{item}</option>
													})}
											</Field>
										</div>
										<div className="col mb-3">
											<label className="mb-1">City</label>
											<Field as="select" className="form-select rounded-1" name="city">
												{s_a[state_arr.indexOf(values && values.state)] &&
													s_a[state_arr.indexOf(values && values.state)].split("|") &&
													s_a[state_arr.indexOf(values && values.state) + 1]
														.split("|")
														.map((item, index) => {
															return <option key={index}>{item}</option>
														})}
											</Field>
										</div>
										<div className="col mb-3">
											<label className="mb-1">Pincode</label>
											<Field type="number" name="pincode" className="form-control" />
										</div>
									</div>

									<div className="d-flex justify-content-end">
										<button
											className="btn btn-secondary me-2"
											type="reset"
											disabled={!(dirty && isValid)}
										>
											<i className="fa fa-cancel me-2"></i>Cancel
										</button>
										<button className="btn btn-success" disabled={!(dirty && isValid)}>
											<i className="fa fa-save me-2"></i>Save
										</button>
									</div>
								</Form>
							)
						}}
					</Formik>
				</div>
			)}
		</div>
	)
}
export default Profile
