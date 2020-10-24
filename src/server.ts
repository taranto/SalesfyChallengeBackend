import app from "./app";
import "./bootstrap";

app.listen(process.env.NODE_PORT, () =>
  console.log(`Salesfy app listening on port ${process.env.NODE_PORT}`)
);
