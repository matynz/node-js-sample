var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/ok', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send({"preference_id": "229991228-a664ff02-98cf-4244-b153-dcd936d265cf"})
})

app.get('/wait', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.status(400).json({"error" : {
                    "type": "in_process",
                    "message": "Espere que cuelgue el surtidor"
                }
                })
})

app.get('/notstarted', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.status(400).json({"error" : {
                    "type": "unavailable",
                    "message": "Todavía no empieza"
                }
                })
})

app.get('/invalid', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.status(400).json({"error" : {
                    "type": "invalid",
                    "message": "No disponible"
                }
                })
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
