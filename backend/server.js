const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: "./config.env" });

const app = express();

express.static('./app/<build klasörü>')


app.use(cors());
app.use(json());

let notes = [
  {
    id: nanoid(),
    title: 'note 1',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    bgColor:"#EC55D8"
  },
  {
    id: nanoid(),
    title: 'note 2',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    bgColor:"#23c788"
  },
  {
    id: nanoid(),
    title: 'note 3',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    bgColor:"#36ABDD"
  },
  {
    id: nanoid(),
    title: 'note 4',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    bgColor:"#A689D2"
  },
  {
    id: nanoid(),
    title: 'note 5',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    bgColor:"#F8FB37"
  },
];

app.get('/notes', (req, res) => res.send(notes));

app.post('/notes', (req, res) => {
  const note = { title: req.body.title, id: nanoid(), description:req.body.description, bgColor:req.body.bgColor };
  notes.push(note);
  return res.send(note);
});

app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex((note) => note.id == id);
  if (index > -1) {
    notes.splice(index, 1);
  }

  res.send(notes);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));