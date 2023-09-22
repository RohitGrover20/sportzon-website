const { default: config } = require("@/config");

async function verifySession(options) {
  try {
    const result = await fetch(
      `${config.API_URL}/auth/verify-session`,
      options
    );
    if (result) {
      const verify = await result.json();
      return verify;
    }
  } catch (err) {
    console.log(err);
  }
}

export default verifySession;
