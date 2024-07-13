// src/components/Note.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Note = ({ note, deleteNote }) => {
  return (
    <Card className="card-custom">
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.content}</Card.Text>
        <Button variant="danger" onClick={() => deleteNote(note.id)} className="btn-custom">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default Note;
