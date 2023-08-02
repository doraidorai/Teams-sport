// import app from backend/app
const app = require("./backend/app");
// Server is listing on PORT 3000
// http://localhost:3000
app.listen(3000, ()=> {
    console.log("server actually START NOW");
});