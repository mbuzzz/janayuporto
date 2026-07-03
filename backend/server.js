const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Inisialisasi Database SQLite
// File database akan disimpan di folder backend dengan nama database.sqlite
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to SQLite database.');
    // Buat tabel jika belum ada
    db.run(`CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      text TEXT NOT NULL,
      date TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// Route: Mengambil semua pesan (terbaru di atas, limit 50)
app.get('/api/messages', (req, res) => {
  const sql = 'SELECT * FROM messages ORDER BY timestamp DESC LIMIT 50';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Route: Menyimpan pesan baru
app.post('/api/messages', (req, res) => {
  const { name, text, date } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Pesan (text) wajib diisi' });
  }

  const sql = 'INSERT INTO messages (name, text, date) VALUES (?, ?, ?)';
  const params = [name || 'Tamu Rahasia', text, date];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    // Kirim balik data yang baru disimpan
    res.json({
      id: this.lastID,
      name: params[0],
      text: params[1],
      date: params[2]
    });
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});