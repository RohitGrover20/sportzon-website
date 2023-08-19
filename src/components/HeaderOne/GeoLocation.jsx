import { useEffect, useState } from "react"

const GeoLocation = () => {
	const [region, setRegion] = useState()
	const [location, setLocation] = useState({ latitude: "", longitude: "" })

	const fetchApiData = async ({ latitude, longitude }) => {
		var res = await fetch(
			"https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
				latitude +
				"&longitude=" +
				longitude +
				"& localityLanguage=en"
		)
		const data = await res.json()
		setRegion(data)
	}

	useEffect(() => {
		if ("geolocation" in navigator) {
			// Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
			navigator.geolocation.getCurrentPosition(({ coords }) => {
				const { latitude, longitude } = coords
				setLocation({ latitude: latitude, longitude: longitude })
			})
		}
	}, [])

	useEffect(() => {
		if (location) {
			fetchApiData(location)
		}
	}, [location])

	return (
		<>
			{region ? (
				<li className="text-white me-5 mb-0">
					<i className="fa fa-map-marker me-1" />
					{region && region.locality}, {region && region.city}
				</li>
			) : null}
		</>
	)
}

export default GeoLocation
