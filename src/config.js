const dev = {
  API_URL: "http://localhost:9000",
};

const prod = {
  API_URL: "https://sportzon.in/api",
  // API_URL: "http://18.234.210.67:9000",
};

const config = process.env.NODE_ENV == "development" ? dev : prod;
console.log(config)
export default config;
