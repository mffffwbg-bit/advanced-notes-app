# Advanced Notes App

A modern React-based note-taking application with categories, organized storage, and a clean user interface.

## Features

- ✍️ Create notes with title and content
- 📁 Organize notes by categories (Personal, Work, Ideas, Todo)
- 📅 Automatic date tracking for each note
- 🗑️ Delete notes easily
- 💾 Notes stored in component state
- 📱 Responsive design for all devices
- 🎨 Beautiful gradient background and card design

## How to Run

1. Make sure Node.js is installed
2. Navigate to the project folder
3. Run:
```bash
npm install
npm start
```

4. Open http://localhost:3000 in your browser

## Project Structure
```
src/
├── App.js       (Main component with state management)
├── App.css      (Styling and layout)
└── index.js     (React entry point)
```

## Technologies Used

- React 18
- JavaScript ES6+
- CSS3 (Flexbox, Grid, Gradients)
- React Hooks (useState)

## Features Explained

### Add Note
1. Enter a title
2. Write your note content
3. Select a category
4. Click "Add Note"

### Categories
- **Personal** - Personal thoughts and notes
- **Work** - Work-related tasks and notes
- **Ideas** - Creative ideas and brainstorming
- **Todo** - Tasks and reminders

### Delete Note
Click the "Delete" button on any note card to remove it.

## Example Usage
```
Title: My First Note
Content: This is a test note
Category: Personal
```

The note will appear in the notes section with the current date.

## Future Enhancements

- Search functionality
- Tags support
- Local storage persistence
- Note editing
- Export notes to PDF
- Dark mode toggle

## Author

mffffwbg-bit

## License

MIT
```
