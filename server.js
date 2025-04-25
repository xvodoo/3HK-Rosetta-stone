const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const cors = require('cors');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.static('static'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

let latestVersion = '1.0.0';

app.get('/updates', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'updates.html'));
});

app.get('/api/version', (req, res) => {
  res.json({ version: latestVersion });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

wss.on('connection', (ws) => {
  console.log('📡 Client connected');

  ws.on('message', (message) => {
    console.log('📥 Message from client:', message);
  });
});


function broadcastVersionUpdate() {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'version_update', version: latestVersion }));
    }
  });
}


latestVersion = '1.0.0';  
broadcastVersionUpdate();


setInterval(() => {
  console.log('🔁 Sending update to clients...');
  broadcastVersionUpdate(); 
}, 10000); 

server.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
