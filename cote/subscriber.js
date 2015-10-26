var Subscriber = require('cote').Subscriber,
    subscriber = new Subscriber({
        name: 'subscriber'
    });

subscriber.on('update', function(message) {
    console.log('update', message);
});
