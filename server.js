const express = require('express');
const multer = require('multer');
const upload = multer();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));

app.post('/file', upload.single('file'), (req, res) => {
  if (req.file) {
    res.json({size:req.file.size});
  }
  else {
    res.send({error:"didn't get file"});
  }
  res.end();
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});