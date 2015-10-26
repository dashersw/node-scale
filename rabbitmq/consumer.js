var amqp = require('amqp'),
    connection = amqp.createConnection({host:'localhost'});

connection.on('ready', function () {
    connection.queue('work_queue', {autoDelete: false, durable: true}, function(queue) {
        queue.subscribe({ack: true, prefetchCount: 1}, function(msg) {
            var body = msg.data.toString('utf-8');
            console.log("received", body);
            queue.shift(); // basic_ack equivalent
        });
    });
});
