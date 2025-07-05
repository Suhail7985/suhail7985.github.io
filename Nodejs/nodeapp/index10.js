// const stname1 = process.argv[2] ||"John"
// const stname2 = process.argv[3] ||"John"
// console.log(`Hello ${stname1} and ${stname2}`)


//server started in port 8081 if i tell in terminal by default 8080
import express from 'express';

const app = express();

const PORT = process.argv[2] || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
