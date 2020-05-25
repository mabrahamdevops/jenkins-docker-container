/** This is a basic test application 
 *  Once the process to deploy Jenkins and Docker via a Docker 
 *  container is verified, the nodjs app will be replaced with
 *  a functioning Python application.  
 *  The reasoning for using nodejs to test is that Jenkins is 
 *  based in Java.
 *  
 *  
 */


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

/** Exposing port 3000 to for the Docker.socket. In a dev environment this 
 *  should be done using network ACLs 
 */

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

/** Any connection errors will be logged for
 *  the function app.listen and 
 */
  console.log('Example app listening at http://%s:%s', host, port);
});
