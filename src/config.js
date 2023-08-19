const dev = {
	API_URL: "http://54.90.89.188:9000",
}

const prod = {
	API_URL: "http://54.90.89.188:9000",
}

const config = process.env.NODE_ENV == "development" ? dev : prod
export default config
