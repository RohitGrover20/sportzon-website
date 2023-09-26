const dev = {
	API_URL: "http://localhost:9000",
}

const prod = {
	API_URL: "http://18.235.51.187:9000",
}

const config = process.env.NODE_ENV == "development" ? dev : prod

export default config
