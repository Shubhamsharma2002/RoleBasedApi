import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import router from "./Src/Routes/index.js";


// server by express
const server = express();
// for data handlling
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(
  cors({
    // origin:process.env.CORS_ORIGIN,
    Credential: true,
  })
);
// v1 api are
server.use('/api/v1', router);

server.get("/", (req, res) => {
  return res.send("Server is fired successfully :---:)");
});

export { server };