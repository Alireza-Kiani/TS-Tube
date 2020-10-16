import app from "./app";

const port = process.env.PORT;

app.listen(port,async () => {
    console.log(`Server is up and running on port ${port}`);
});
