const dev = {
  API_URL: "http://localhost:9000",
};

const prod = {
  API_URL: "https://www.sportzon.in/api",
<<<<<<< HEAD
=======

>>>>>>> c49956c (changes on Home Page)
};

const config = process.env.NODE_ENV == "development" ? dev : prod;

export default config;
