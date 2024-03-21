const dev = {
  API_URL: "http://localhost:9000",
};

const prod = {
  API_URL: "https://backend.sportzon.in",
  // API_URL: "http://18.234.210.67:9000",
};

const config = process.env.NODE_ENV == "development" ? dev : prod;
export default config;
