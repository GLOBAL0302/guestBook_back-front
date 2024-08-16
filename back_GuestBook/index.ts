import express from "express";
import config from './config';
import cors from "cors";
import guestBook from './routing/guestBook';
import fileDb from './fileDb';

const app = express();
const port  = 8000;

app.use(cors(config.corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use("/guestBook", guestBook);

const run = async ()=>{
  await fileDb.init();
  app.listen(port, () =>
  console.log(`Server running on port: ${port}`))
}

run().catch(console.error);