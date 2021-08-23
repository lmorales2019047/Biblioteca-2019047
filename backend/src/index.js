require("./app");
require("./config/db");

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is on port", 3000)
});