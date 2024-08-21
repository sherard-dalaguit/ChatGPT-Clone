import express from "express";
import cors from "cors";
import ImageKit from "imagekit";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

const imagekit = new ImageKit({
    privateKey: 'private_vt7XoUAw6VHvRXhf41m8KeuZ2o4=',
    publicKey: 'public_+xmKMIUFEDJ2p8pBGMqbT2I3TRc=',
    urlEndpoint: 'https://ik.imagekit.io/sherarddev',
})

app.get("/api/upload", (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
})

app.listen(port, () => {
    console.log("Server running on 3000");
})