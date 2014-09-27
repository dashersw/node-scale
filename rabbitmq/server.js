var amqp = require('amqp'),
    connection = amqp.createConnection(),
    workId = 0;

connection.on('ready', function() {
    connection.queue('work_queue', {autoDelete: false, durable: true}, function(queue) {
        setInterval(function() {
            connection.publish('work_queue', 'message #' + ++workId, { deliveryMode: 2 });
            console.log('sent message #' + workId);
        }, 1000);
    });
});
