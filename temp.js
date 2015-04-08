var mysql = require('mysql');

var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'login',
      port      :'3306',    
}
);

connection.connect();


query = connection.query("SELECT * FROM users;");
    query
    .on('error', function(err) {
        console.log( err );

    })
    .on('result', function( data ) {
       console.log('YourData',data);
    });
