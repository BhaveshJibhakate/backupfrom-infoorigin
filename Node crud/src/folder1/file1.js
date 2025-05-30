let dotenv=require('dotenv')
dotenv.config({path:'./folder2/.env'})

console.log(process.env.DATABASE_KEY);
