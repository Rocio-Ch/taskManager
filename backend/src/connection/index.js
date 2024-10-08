import sql from "mssql"
import dotenv from "dotenv";

dotenv.config();

const sqlConfig = {
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        server: 'localhost',
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000
        },
        options: {
          encrypt: true, // for azure
          trustServerCertificate: true // change to true for local dev / self-signed certs
        }
}

//Here begins the instance and connects it to the database
const db = await sql.connect(sqlConfig)

export default db
