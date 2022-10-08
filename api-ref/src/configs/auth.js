
const auth = {
  jwt: {
    secret: process.env.AUTH_SECRET || "default",
    expiresIn: "1d",
    // secret: "default",
    // expiresIn: "1d"
  }
}

module.exports = { auth };