const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "vhbsdkjbslejjjjjnfvlkejaklnclkanvkanfuwenfksan",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST || "mongodb+srv://gouthami1316:Gouthami%40123@cluster0.fx5id.mongodb.net/?retryWrites=true&w=majority"
}

export default config