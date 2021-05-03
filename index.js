const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3000;

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
app.listen(port, () =>
  console.log(`Listening on port
   ${port}!`)
);
