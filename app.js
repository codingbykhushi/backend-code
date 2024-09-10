import express from 'express';
import sequelize from './db/dbconfig.js';
import bodyParser from 'body-parser';
import cors from "cors";
//import usermodel from './model/user.model.js'
import Userrouter from './routes/user.router.js'
import roomrouter from './routes/rooms.router.js'
import payment from './routes/payment.router.js'
import './model/Roomsavailabler.js';
import "./model/asocisation.js"
import Contactt from './model/UserContact.js';
import RatingRouter from './routes/Rating.router.js'


//import Payment from './model/payment.model.js';

import fileUpload from 'express-fileupload';
import router from './routes/Owner.router.js';
//import routerp from './routes/payment.router.js';




const app = express();
app.use(fileUpload({
    useTempFiles: true
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/user", Userrouter);
app.use("/rooms", roomrouter);
// app.use("/user", routerp)
app.use("/api", payment);
app.use("/owner", router)
app.use("/rating",RatingRouter)

sequelize.sync({ alter: true })
    .then(result => {
        console.log("Tables and associations updated successfully.");
    })
    .catch(err => {
        console.log("Error updating tables and associations:", err);
    });



// app.use("/user", (req, res) => {
//     res.status(200).json({ message: "greetings fellows" })
// });
app.listen(4000, () => {
    console.log("server stated");
})
