import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()
import cors from 'cors'
import './db.js'
import applicantRoutes from './src/routes/ApplicantRoutes.js'
import memberRoutes from './src/routes/MemberRoutes.js'
import loginRoutes from './src/routes/LoginRoutes.js'

const PORT = process.env.PORT;
const __dirname = path.resolve();

const app = express();
app.use(express.json());

let corsOptions = {
    origin : process.env.ORIGIN_URI,
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers']
 }

app.use(cors(corsOptions));

app.use(
  express.static(path.join(__dirname, "/PolarCRM-Frontend/dist/polar-crm"))
);
app.use("/api/applicants", applicantRoutes);
app.use("/api/members", memberRoutes);
app.use("/auth/login", loginRoutes);

app.all("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "/PolarCRM-Frontend/dist/polar-crm/index.html")
    );
  });

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
