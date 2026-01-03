import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Personal');

  const categories = ['Personal', 'Work', 'Ideas', 'Todo'];

  const addNote = () => {
    if (noteTitle.trim() === '' || noteText.trim() === '') {
      alert('Please enter title and content!');
      return;
    }

    const newNote = {
      id: Date.now(),
      title: noteTitle,
      content: noteText,
      category: selectedCategory,
      date: new Date().toLocaleDateString()
    };

    setNotes([newNote, ...notes]);
    setNoteTitle('');
    setNoteText('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <header className="header">
        <h1>📝 Note Taking App</h1>
      </header>

      <div className="container">
        <div className="input-section">
          <input
            type="text"
            placeholder="Note title..."
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className="title-input"
          />

          <textarea
            placeholder="Write your note here..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className="note-textarea"
          />

          <div className="button-section">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <button onClick={addNote} className="add-button">
              Add Note
            </button>
          </div>
        </div>

        <div className="notes-section">
          {notes.length === 0 ? (
            <p className="empty-message">No notes yet. Create your first note!</p>
          ) : (
            notes.map(note => (
              <div key={note.id} className={`note-card ${note.category.toLowerCase()}`}>
                <div className="note-header">
                  <h3>{note.title}</h3>
                  <span className="note-date">{note.date}</span>
                </div>
                <p className="note-content">{note.content}</p>
                <div className="note-footer">
                  <span className="note-category">{note.category}</span>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;