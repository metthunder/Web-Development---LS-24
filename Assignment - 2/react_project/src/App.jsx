// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Note from './components/Note.jsx';
import NoteForm from './components/NoteForm.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedNotes) setNotes(savedNotes);
    if (savedDarkMode) setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <NoteForm addNote={addNote} />
      <div className="note-container">
        {notes.map(note => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default App;
