const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process');
const app = express();
const port = 4444;

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4444'],
  })
);

app.get('/:title', (req, res) => {
  const { title } = req.params;
  let dataToSend;
  const python = spawn('python', ['you2.py', title]);
  python.stdout.on('data', function (data) {
    dataToSend = data.toString();
  });
  python.on('close', () => {
    res.send(dataToSend);
  });
});
app.listen(port, '0.0.0.0', () =>
  console.log(`Listening on port
   ${port}!`)
);
