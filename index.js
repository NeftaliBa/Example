var particle = new Particle();
var token;

particle.login({username: '@ucol.mx', password: ''}).then(
  function(data) {
     token = data.body.access_token;
  },
  function (err) {
    console.log('Could not log in.', err);
  }
);

function updateBackground(value) {
    var body = document.body;
    var sun = document.querySelector('.sun');
    var moon = document.querySelector('.moon');

    if (value == 1) {
        body.classList.remove('night');
        body.classList.add('day');
        sun.style.transform = 'translateX(0)';
        moon.style.transform = 'translateX(-200px)';
    } else {
        body.classList.remove('day');
        body.classList.add('night');
        sun.style.transform = 'translateX(-200px)';
        moon.style.transform = 'translateX(0)';
    }
}

var breaker1 = document.getElementById('Breaker1');
breaker1.oninput = function() {
    var output = document.getElementById('state1');
    output.innerHTML = this.value;
    var Salida1 = this.value;
    updateBackground(Salida1);
    if (token) {
        particle.callFunction({ deviceId: '', name: 'led', argument: Salida1, auth: token });
    }
}

// Initialize background on page load
updateBackground(breaker1.value);