const DevWebpack = require('./config/webpack.dev');
const ProWebpack = require('./config/webpack.prod');
switch(process.env.NODE_ENV){
    case 'dev':
    module.exports = DevWebpack;
    break;
    case 'prod':
    module.exports = ProWebpack;
    break;
    default:
    module.exports = DevWebpack;
    break;
}