const dev = {
  API_URL: "http://localhost:9000",
};

const prod = {
  API_URL: "https://api.sportzon.in",
};

const config = process.env.NODE_ENV == "development" ? dev : prod;

export default config;
