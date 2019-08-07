const dbUser = "zorkiy";
const dbPassword = "Maks125";

const config = {
  port: 3113,
  secret: 'secret-key',
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-dldrs.mongodb.net/nodejs-test`
};

module.exports = config;