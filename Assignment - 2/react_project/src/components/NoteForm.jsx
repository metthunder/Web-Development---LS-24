// src/components/NoteForm.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      const newNote = { id: Date.now(), title, content };
      addNote(newNote);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="note-form-container">
      <Form onSubmit={handleSubmit} className="w-50">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-custom">Add Note</Button>
      </Form>
    </div>
  );
};

export default NoteForm;
