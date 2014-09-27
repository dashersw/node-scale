var redis = require('redis'),
    client = redis.createClient(6379, '127.0.0.1'),
    requestId = 0;

setInterval(function() {
    console.log('publishing request #' + ++requestId);
    client.publish('request', JSON.stringify({
        body: 'some cool request #' + requestId
    }));
}, 1000);
