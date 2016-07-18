const express = require('express');

let app = express();


app.use(require('./controllers'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
