import config from 'config'; // expected to import 'src/config/index.js'
import localConfig from './config';

console.log('config', config);
console.log('localConfig', localConfig);
