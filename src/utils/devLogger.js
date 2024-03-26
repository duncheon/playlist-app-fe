import config from '../config/config';

const logger = {
  log: function (message) {
    if (config.ENV !== 'production') {
      console.log(message);
    }
  },
};

export default logger;
