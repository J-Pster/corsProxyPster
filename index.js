// Listen on a specific host via the HOST environment variable
const host = 'https://corsproxypster-production.up.railway.app/';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;

const cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});