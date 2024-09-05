// index.js
var particle = new Particle(); 
// Crea una nueva instancia del objeto Particle para interactuar con los dispositivos

var token; 
// Variable que almacenará el token de autenticación

particle.login({username: 'nbarrera0@ucol.mx', password: 'M33tyf00d003'}).then(
  function(data) {
    token = data.body.access_token;
    // Almacena el token de autenticación recibido después de iniciar sesión
  },
  function (err) {
    console.log('Could not log in.', err);
    // Muestra un mensaje en la consola si ocurre un error al iniciar sesión
  }
);

setInterval(function() {
  var breaker1 = document.getElementById('Breaker1');
  // Obtiene el control deslizante por su ID (Breaker1)

  breaker1.oninput = function() {
    var output = document.getElementById('state1');
    // Obtiene el elemento para mostrar el valor del control deslizante

    output.innerHTML = this.value;
    // Actualiza el valor del elemento 'state1' con el valor actual del control deslizante

    var Salida1 = this.value;
    // Almacena el valor actual del control deslizante en la variable Salida1

    particle.callFunction({
      deviceId: '0a10aced202194944a059eec', 
      // ID del dispositivo Particle

      name: 'led', 
      // Nombre de la función que se ejecuta en el dispositivo

      argument: Salida1, 
      // Argumento que se pasa a la función del dispositivo (el valor del control deslizante)

      auth: token, 
      // Token de autenticación necesario para la llamada a la API
    });
  }
}, 1000);
// Llama a esta función cada segundo para verificar si el valor del control deslizante ha cambiado
