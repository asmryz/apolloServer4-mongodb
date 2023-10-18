const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const db = require("./models");

(async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    app.use(express.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server, { context: async () => ({ db }) }));
    app.listen(8000, () => console.log(`Server is listening on http://localhost:8000/graphql`));
})();
