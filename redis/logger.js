var redis = require('redis'),
    logger = redis.createClient(6379, '127.0.0.1');

logger.subscribe('request');

logger.on('message', function(channel, message) {
    if (channel == 'request')
        console.log('logging', JSON.parse(message).body);
});
