import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
const app = express();
const router = express.Router();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/about', function(req,res){
  res.sendFile(path.join(__dirname + '/about.html'));
});

router.get('/contact-me', function(req,res){
  res.sendFile(path.join(__dirname + '/contact-me.html'));
});

router.get('*', function(req,res){
  res.sendFile(path.join(__dirname + '/404.html'));
});

app.use('/', router);
app.listen(port);