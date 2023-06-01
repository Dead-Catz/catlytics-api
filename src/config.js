import * as dotenv from 'dotenv'
dotenv.config()
export const CONFIG = {
    port: process.env.PORT ?? 8300,
    DB_URL: process.env.DB_URL,
    API_TOKEN: process.env.API_TOKEN ?? 'catlytics',
    SYSTEM_TOKEN: process.env.SYSTEM_TOKEN ?? `behzad`,
}
