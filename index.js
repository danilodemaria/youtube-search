const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 4444;

app.get('/:title', (req, res) => {
  console.log('to aqui', title);
  const { title } = req.params;
  let dataToSend;
  const python = spawn('python', ['you2.py', title]);
  python.stdout.on('data', function (data) {
    console.log('dentro');
    dataToSend = data.toString();
  });
  python.on('close', () => {
    console.log('dentro do close agora');
    res.send(dataToSend);
  });
});
app.listen(port, () =>
  console.log(`Listening on port
   ${port}!`)
);
