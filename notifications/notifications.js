require("./mongoose");
const { ApolloServer } = require("apollo-server-express");
const { buildFederatedSchema } = require("@apollo/federation");
const cors = require("cors");
const app = require("express")();
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { idbytoken } = require("./model");
const port = 4003;

var http = require("http").createServer(app);
// var io = require("socket.io")(http);
// io.on("connection", (socket) => {
//     console.log("connected to web socket", socket.id);
//     socket.emit("skevent", "SSSSSOOOOket");
//     socket.on("disconnect", () => {
//         console.log("user disconnected");
//     });
//     socket.on("message", (msg) => {
//         console.log(msg);
//     });
// });
var corsOptions = {
    // origin: true,
    origin: ["http://localhost:4000"],
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const server = new ApolloServer({
    schema: buildFederatedSchema([{ typeDefs, resolvers }]),
    context: async ({ res, req }) => {
        // console.log(req);
        res.header("Access-Control-Allow-Origin", "http://localhost:4000");

        const tokenBearer = req.headers.auth || "";
        const token = tokenBearer.split(" ")[1];

        // console.log(token);
        if (token) {
            const userId = await idbytoken(token);
            req.userId = userId;
            req.token = token;
            // console.log(userId);
        }
        // console.log(res);
        return { req, res };
    },
});

server.applyMiddleware({ app });
// app.listen({ port }, () => console.log(`🚀 NOTIFICATIONS ready at http://localhost:4003${server.graphqlPath}`));
http.listen({ port }, () => console.log(`🚀 NOTIFICATIONS ready at http://localhost:4003${server.graphqlPath}`));
