// Obtener el valor del parámetro llamado "parametro" de la URL
var urlParams = new URLSearchParams(window.location.search);
var parametro = urlParams.get('dato');

// Asignar el valor del parámetro al elemento span
var parametroValue = document.getElementById('parametroValue');
parametroValue.textContent = parametro;
