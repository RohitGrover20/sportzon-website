"use client"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import config from "@/config"
import EventsCard from "@/components/Cards/EventsCard"
import SimpleCard from "@/components/Cards/SimpleCard"
import Loading from "@/components/Loading"

function Search() {
	const [loader, setLoader] = useState(false)
	const [data, setData] = useState([])
	const searchParams = useSearchParams()
	const referrer = searchParams.get("referrer")
	const keyword = searchParams.get("keyword")
	const state = searchParams.get("state")
    const activity = searchParams.get("activity")
    
	useEffect(() => {
		setLoader(true)
		axios
			.post(`${config.API_URL}/landing/search`, { referrer, keyword, state, activity })
			.then((result) => {
				setLoader(false)
				setData(result && result.data && result.data.data)
			})
			.catch((err) => {
				setLoader(false)
				console.log(err)
			})
	}, [searchParams])

	return (
		<>
			<section className="position-relative">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-7 col-lg-10 col-md-12 col-sm-12">
							<div className="exlopi-yut">
								<div className="text-center mb-2">
									<h1 className="display-2 font--bold">
										Search <span className="text-primary">Result</span>
									</h1>
									<p className="text-muted fs-6">
										Got a question about killar with transfer? We're here to help you.
									</p>
								</div>
								{/* <div className="action-form">
                                    <form>
                                        <div className="position-relative mb-4 mb-lg-5">
                                            <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-3" />
                                            <input
                                                className="form-control gray-simple rounded-3 ps-5"
                                                type="search"
                                                placeholder="Enter keyword"
                                            />
                                        </div>
                                    </form>
                                </div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			{loader == true ? (
				<Loading />
			) : (
				<section className="bg-light-dark position-relative">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-xl-12 col-lg-12">
								<h5 className="mb-3" style={{ textTransform: "capitalize" }}>
									Explore All {referrer}
								</h5>
							</div>
						</div>

						<div className="row justify-content-center g-4">
							{data &&
								data.map((item, index) => {
									return (
										<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6" key={index}>
											{referrer == "venue" ? (
												<SimpleCard item={item} />
											) : (
												<EventsCard item={item} />
											)}
										</div>
									)
								})}
						</div>
					</div>
				</section>
			)}
		</>
	)
}

export default Search
