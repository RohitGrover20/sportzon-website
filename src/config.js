const dev = {
	API_URL: "https://dev.sportzon.in",
}

const prod = {
	API_URL: "https://dev.sportzon.in",
}

const config = process.env.NODE_ENV == "development" ? dev : prod

export default config
