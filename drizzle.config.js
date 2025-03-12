/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:zN7EIGmReb3F@ep-cool-grass-a51hgk0d.us-east-2.aws.neon.tech/car-marketplace?sslmode=require', 
    }
  };