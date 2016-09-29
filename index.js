var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/ok', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send({"preference_id": "229883612-fd9fc2a6-dd11-4db8-8c87-ff09b74aed86"})
})

app.get('/wait', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send({"error" : {
                    "type": "in_process",
                    "message": "Espere que cuelgue el surtidor"
                }
                })
  request.status(400)
})

app.get('/notstarted', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send({"error" : {
                    "type": "unavailable",
                    "message": "Todavía no empieza"
                }
                })
  request.status(400)
})

app.get('/invalid', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send({"error" : {
                    "type": "invalid",
                    "message": "No disponible"
                }
                })
  request.status(400)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
