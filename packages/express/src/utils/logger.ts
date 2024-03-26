import * as path from 'path';
import { TransportTargetOptions } from 'pino';
import pino from 'pino';
import pinoHttp from 'pino-http';
// import { createStream } from 'rotating-file-stream';

// const stream = createStream(path.resolve(__dirname, '../../logs', 'accessLog'), {
//   size: '10M', // rotate every 10 MegaBytes written
//   interval: '5m', // rotate every 5 mins
//   compress: 'gzip', // compress rotated files
// });

const baseTransportTargets: TransportTargetOptions[] = [
  {
    target: 'pino/file',
    options: {
      mkdir: true,
      destination: path.resolve(__dirname, '../../logs', 'accessLog'),
    },
  },
  {
    target: 'pino/file',
    level: 'error',
    options: {
      mkdir: true,
      destination: path.resolve(__dirname, '../../logs', 'errorLog'),
    },
  },
];

const prettyTarget: TransportTargetOptions = {
  target: 'pino-pretty',
  options: {
    colorize: true,
  },
};

const transportTargets: TransportTargetOptions[] = process.env.mode === 'dev' ? [prettyTarget, ...baseTransportTargets] : baseTransportTargets;

const logger = pino();

export const requestLogger = pinoHttp({
  logger,
  transport: {
    targets: transportTargets,
  },
  customLogLevel: (req, res, error) => {
    if (res.statusCode >= 400 || error) {
      return 'error';
    }
    return 'info';
  },
});
