
function validarFormulario(event) {
  event.preventDefault();
  let form = event.target;
  let inputs = form.querySelectorAll('input, select');
  let valido = true;

  for (let input of inputs) {
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.focus();
      valido = false;
      break;
    } else if (input.type === 'tel' && !/^\d{10,11}$/.test(input.value)) {
      input.focus();
      valido = false;
      break;
    } else if (input.type === 'datetime-local' && !input.value) {
      input.focus();
      valido = false;
      break;
    }
  }

  return valido;
}
  // else if (input.type === 'checkbox' && !input.checked) {
  //     input.focus();
  //     valido = false;
  //     break;
  // }

  
function btConforma() {
  let confirmButtons = document.querySelectorAll('.confirm-btn');
  confirmButtons.forEach(button => {
    button.addEventListener('click', event => {
      let serviceType = button.getAttribute('data-service');
      handleConfirmation(serviceType);
    });
  });
}