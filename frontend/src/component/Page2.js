import './Page2.css';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';
import { motion } from "framer-motion";

function Page2() {

  let firstValue = JSON.parse(localStorage.getItem("notes"))
  if(!firstValue){
    firstValue = [];
  }
  const [notes, setNotes] = useState(firstValue);
  const [personal, setPersonal] = useState(firstValue);
  
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    Axios.post('http://localhost:5000/api/note').then((response)=> {setPersonal(response.data);});
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const note = event.target.note.value;
    setNotes([...notes, note]);
    event.target.reset();
  };

  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  let numList = Object.keys(notes).length;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <motion.div className='App' initial={{y: 500, opacity: 0}} animate={{y: 0, opacity: 1,}}>
      <h1>{personal}</h1>
      <div className='topDetail'>
      <div className='sumList'>
        <p>Number of notes : {numList} Notes.</p>
      </div>

      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Note
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Note</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your new note.
            </DialogContentText>
              <div className="inputAddNotes">
                <form onSubmit={handleSubmit}>
                  <input type="text" name="note" placeholder="Write a note..." required />
                  <button className='addbtn' type="submit" onClick={handleClose}>Add Note</button>
                </form>
              </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
      </div>

      <div>
          {notes.map((note, index) => (
            <div className='list' key={index}>
              <div className='text'>
                {note}
              </div>
              <div className='btn'>
                <button className="delbtn" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
}

export default Page2;