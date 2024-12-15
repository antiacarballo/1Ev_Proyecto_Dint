document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const nombre = document.getElementById('nombre').value.trim();
  const password = document.getElementById('password').value.trim();


  document.getElementById('error-nombre').innerText = '';
  document.getElementById('error-password').innerText = '';

  let hayError = false;

  if (nombre === '') {
    document.getElementById('error-nombre').innerText = 'El campo nombre no puede estar vacío.';
    hayError = true;
  }


  if (password === '') {
    document.getElementById('error-password').innerText = 'El campo contraseña no puede estar vacío.';
    hayError = true;
  } else if (password.length < 8 || password.length > 16) {
    document.getElementById('error-password').innerText = 'La contraseña debe tener entre 8 y 16 caracteres.';
    hayError = true;
  } else if (!/^[a-zA-Z0-9$%&/()·]+$/.test(password)) {
    document.getElementById('error-password').innerText = 
      'La contraseña solo puede contener letras, números y los caracteres $%&/()·.';
    hayError = true;
  }

 
  if (!hayError) {
    window.location.href = 'main.html'; 
  }
});

document.getElementById('limpiar').addEventListener('click', function () {
  document.getElementById('nombre').value = '';
  document.getElementById('password').value = '';
  document.getElementById('error-nombre').innerText = '';
  document.getElementById('error-password').innerText = '';
});
