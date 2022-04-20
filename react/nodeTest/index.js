const express = require('express');
const app = express();

console.log(process.env.PORT);
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), () => {
  console.log('running server... ' + app.get('port'));
});