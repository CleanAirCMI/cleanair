import express from 'express';
import db from '../config/db.js';
import cors from 'cors';

const router = express.Router()
const app = express();

app.use(cors());
app.use(express.json())

  // classrooms
    // Route to get all classrooms
    app.get("/get", (req,res)=>{
    db.query("SELECT * FROM classrooms INNER JOIN locations ON classrooms.location_id = locations.location_id;", (err,result)=>{
      if(err) {
      console.log(err)
      } 
    res.send(result)
    });   });

    // Route to get one room
    app.get("/getFromId/:room_id", (req,res)=>{

    const room_id = req.params.room_id;
    db.query("SELECT * FROM classrooms WHERE room_id = ?", room_id, 
    (err,result)=>{
      if(err) {
      console.log(err)
      } 
      res.send(result)
      });   });
    
    //kan weg
    // Route for creating the room
    app.post('/create', (req,res)=> {

    const name = req.body.name;
    const image = req.body.image;
    const floor = req.body.floor;
    const total_seats = req.body.total_seats;

    db.query("INSERT INTO classrooms (name, image, floor, total_seats) VALUES (?,?,?,?)",[name,image,floor,total_seats], (err,result)=>{
    if(err) {
    console.log(err)
    } 
    console.log(result)
    });   })

export default app;