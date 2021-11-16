import path from 'path';
import { serverRouter } from './routes';
import  express from "express";
import { config } from  '../config'
import cors from 'cors';
const app = express();
const PORT = config.port;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( express.static(path.join(__dirname, '../public')));
app.set('public', path.join(__dirname, 'public'));
//app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
})

app.post('/anthony', (req, res, next) => {
    console.log(req.body);
    console.log(req.params);
    next();
    });

serverRouter(app);