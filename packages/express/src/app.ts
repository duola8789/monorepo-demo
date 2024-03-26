import express from 'express';
import ENV_CONFIG from '@express/env';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from '@express/utils/logger';

const app = express();

app.use(logger);
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World');
  res.end();
});

app.get('/health', (req, res) => {
  return res.status(200).send({ health: true });
});

app.get('/test', (req, res) => {
  if (req.query.test === '1') {
    req.log.error('Wrong Params');
    return res.json({
      code: 500,
      success: false,
      message: '',
      data: 'error',
    });
  }

  return res.json({
    code: 200,
    success: true,
    message: '',
    data: 'ok',
  });
});

app.listen(ENV_CONFIG.serverPort, () => {
  console.log('Server running on port %d', ENV_CONFIG.serverPort);
});
