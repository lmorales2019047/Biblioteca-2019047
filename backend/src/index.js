const app = require("./app");

require("./config/db");
require("./app");


app.listen(process.env.PORT || 3000, () => {
    console.log("Server is on port", 3000)
});