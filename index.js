const hapi = require("hapi");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017");

mongoose.connection.once("open", () => {
  console.log("Connected to db");
});

const server = hapi.server({
  port: 4000,
  host: "localhost",
});
const init = async () => {
  server.route({
    method: "GET",
    path: "/",
    handler: (req, res) => {
      return `<h1>My modern api</h1>`;
    },
  });
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
};

init();
