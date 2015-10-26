var Publisher = require('cote').Publisher,
    publisher = new Publisher({
        name: 'publisher',
        broadcasts: ['update']
    }),
    workId = 0;

publisher.on('ready', function() {
    setInterval(function() {
        console.log('emitting', ++workId);
        publisher.publish('update', workId);
    }, 3000);
});
