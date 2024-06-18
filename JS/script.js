document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  

  function showForm(serviceType) {
    main.innerHTML = '';
    let formContent = '';
    main.style.transition = 'opacity 0.3s ease-in-out';
    main.style.opacity = '0';
    setTimeout(() => {
      main.style.opacity = '1';
      switch (serviceType) {
        case 'veterinario':
          formContent = `
                <div class="contener">
                  <h2>Consulta ao Veterinário</h2>
                  <form id="form-veterinario" onsubmit="return validarFormulario(event)">
                      <div class="box-CaoGato">
                          <label class="box-cao">
                            <img src="img/cao.png" alt="Cão">
                            <div>
                              <input type="checkbox" name="animal" value="cão">
                              <p>Cão</p>
                            </div>
                          </label>
                          <label class="box-gato">
                            <img src="img/gato.png" alt="Gato">
                            <div>
                              <input type="checkbox" name="animal" value="gato">
                              <p>Gato</p>
                            </div>
                          </label>
                      </div>

                      <label>
                        <img src="img/favicon.png" alt="Icon Nome">
                        <input type="text" name="nome-animal" placeholder="Nome do animal" required>
                        <input type="text" name="idade-animal" placeholder="Idade" required>
                      </label>
                      
                      <label>
                        <img class="iconTutor" src="img/usuario.png" alt="Tutor">
                        <input type="text" name="nome-tutor" placeholder="Nome do tutor" required>
                      </label>
                      
                      <label>
                        <img class="iconWhatsapp" src="img/icon-whatsapp.png" alt="contato">
                        <input type="tel" name="contato-tutor" placeholder="Contato" required>
                      </label>
                      
                      <label class="label-Calendario">
                        <img class="calendario" src="img/calendario.png" alt="Calendario">
                        <input type="datetime-local" name="data-horario" required>
                      </label>
                      
                      <button type="button" class="confirm-btn" data-service="veterinario">Confirmar</button>
                      <button type="button" class="cancel-btn" onclick="cancelarAgendamento()">Cancelar</button>
                  </form>
                </div>
              `;
          break;
        case 'estetica':
          formContent = `
                <div class="contener">
                  <h2>Serviço de Estética</h2>
                  <form id="form-estetica" onsubmit="return validarFormulario(event)">
                      <div class="box-CaoGato">
                          <label class="box-cao">
                            <img src="img/cao.png" alt="Cão">
                            <div>
                              <input type="checkbox" name="animal" value="cão">
                              <p>Cão</p>
                            </div>
                          </label>
                          <label class="box-gato">
                            <img src="img/gato.png" alt="Gato">
                            <div>
                              <input type="checkbox" name="animal" value="gato">
                              <p>Gato</p>
                            </div>
                          </label>
                      </div>

                      <label>
                        <img src="img/favicon.png" alt="Icon Nome">
                        <input type="text" name="nome-animal" placeholder="Nome do animal" required>
                        <input type="text" name="idade-animal" placeholder="Idade" required>
                      </label>

                      <label>
                        <img class="iconTutor" src="img/usuario.png" alt="Tutor">
                        <input type="text" name="nome-tutor" placeholder="Nome do tutor" required>
                      </label>

                      <label>
                        <img class="iconWhatsapp" src="img/icon-whatsapp.png" alt="contato">
                        <input type="tel" name="contato-tutor" placeholder="Contato" required>
                      </label>

                      <label>
                          <img class="iconBanho" src="img/banho.png" alt="Banho">
                          <select name="servicos" required>
                              <option value="" disabled selected>Opção</option>
                              <option value="banho">Banho</option>
                              <option value="tosa">Tosa</option>
                              <option value="hidratação">Hidratação</option>
                              <option value="hidratação-banho-tosa">Hidratação + Banho + Tosa</option>
                          </select>
                      </label>
                      
                      <label class="label-Calendario">
                        <img class="calendario" src="img/calendario.png" alt="Calendario">
                        <input type="datetime-local" name="data-horario" required>
                      </label>

                      <button type="button" class="confirm-btn" data-service="estetica">Confirmar</button>
                      <button type="button" class="cancel-btn" onclick="cancelarAgendamento()">Cancelar</button>
                  </form>
                </div>
              `;
          break;
        case 'daycare':
          formContent = `
                <div class="contener">
                  <h2>Day Care</h2>
                  <form id="form-daycare" onsubmit="return validarFormulario(event)">
                      <label>
                        <img src="img/cao.png" alt="Nome do cão">
                        <input type="text" name="nome-animal" placeholder="Nome do animal" required>
                        <input type="text" name="idade-animal" placeholder="Idade" required>
                      </label>

                      <label> 
                          <img class="porte" src="img/porte.png" alt="Tamanho">
                          <select name="porte-animal" required>
                              <option value="" disabled selected>Porte</option>
                              <option value="pequeno">Pequeno</option>
                              <option value="medio">Médio</option>
                              <option value="grande">Grande</option>
                          </select>
                      </label>

                      <label>
                        <img class="iconTutor" src="img/usuario.png" alt="Tutor">
                        <input type="text" name="nome-tutor" placeholder="Nome do tutor" required>
                      </label>

                      <label>
                        <img class="iconWhatsapp" src="img/icon-whatsapp.png" alt="contato">
                        <input type="tel" name="contato-tutor" placeholder="Contato" required>
                      </label>

                      <label>
                          <img class="dayCare" src="img/daycare.jpg" alt="Daycare">
                          <select name="servicos" required>
                              <option value="daycare">Day Care</option>
                              <option value="daycare-banho-tosa">Day Care + Banho</option>
                          </select>
                      </label>
                      <label class="label-Calendario">
                        <img class="calendario" src="img/calendario.png" alt="Calendario">
                        <input type="datetime-local" name="data-horario" required>
                      </label>

                      <button type="button" class="confirm-btn" data-service="daycare">Confirmar</button>
                      <button type="button" class="cancel-btn" onclick="cancelarAgendamento()">Cancelar</button>
                  </form>
                </div>
              `;
          break;
        case 'festa':
          formContent = `
                <div class="contener">
                  <h2>Salão de Festa</h2>
                  <form id="form-festa" onsubmit="return validarFormulario(event)">
                  <div class="box-CaoGato">
                    <label class="box-cao">
                      <img src="img/cao.png" alt="Cão">
                    <div>
                      <input type="checkbox" name="animal" value="cão">
                      <p>Cão</p>
                    </div>
                    </label>
                    <label class="box-gato">
                      <img src="img/gato.png" alt="Gato">
                      <div>
                        <input type="checkbox" name="animal" value="gato">
                        <p>Gato</p>
                      </div>
                    </label>
                  </div>    

                      <label> 
                          <img class="festa" src="img/festa.jpg" alt="festa">
                          <select name="tipo-festa" required>
                              <option value="" disabled selected>Evento</option>
                              <option value="aniversario">Aniversário</option>
                              <option value="encontro">Encontro dog</option>
                              <option value="outro">Outros</option>
                          </select>
                      </label>
                      <label>
                          <img class="porte" src="img/porte.png" alt="Tamanho">
                          <select name="porte-animal" required>
                              <option value="pequeno">Pequeno</option>
                              <option value="medio">Médio</option>
                              <option value="grande">Grande</option>
                          </select>
                          <input type="number" name="quantidade-caes" placeholder="Quantidade" required>
                      </label>

                      <label>
                        <img class="iconTutor" src="img/usuario.png" alt="Responsável">
                        <input type="text" name="nome-tutor" placeholder="Nome do responsável" required>
                      </label>
                      
                      <label>
                        <img class="iconWhatsapp" src="img/icon-whatsapp.png" alt="contato">
                        <input type="tel" name="contato-tutor" placeholder="Contato" required>
                      </label>
                      
                      <label class="label-Calendario">
                        <img class="calendario" src="img/calendario.png" alt="Calendario">
                        <input type="datetime-local" name="data-horario" required>
                      </label>
                      
                      <button type="button" class="confirm-btn" data-service="festa">Confirmar</button>
                      <button type="button" class="cancel-btn" onclick="cancelarAgendamento()">Cancelar</button>
                  </form>
                </div>
              `;
          break;
        default:
          break;
      }

      main.innerHTML = formContent;
      validarData();
      // btConforma();
      setupConfirmButtons()

    }, 300);
  }

  function handleConfirmation(serviceType) {
    const form = document.getElementById(`form-${serviceType}`);
    const isValid = validarFormulario({ target: form, preventDefault: () => {} });
    if (isValid) {
      confirmarAgendamento(serviceType);
    }
  }
  
  
  window.confirmarAgendamento = function (serviceType) {
    
    capturarEInserirValor()
    
    const form = document.getElementById(`form-${serviceType}`);
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      
      data[key] = value;
    });
    localStorage.setItem(`agendamento-${serviceType}`, JSON.stringify(data));
    const whatsappNumber = '79999232104';
    let whatsappMessage = `Agendamento confirmado para ${serviceType}:\n`;
    for (const [key, value] of Object.entries(data)) {
      whatsappMessage += `${key}: ${value}\n`;
    }
    // window.open(`https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

    cancelarAgendamento()
    // addEventListeners();
  }

  function validarFormulario(event) {
    event.preventDefault();
    let form = event.target;
    let inputs = form.querySelectorAll('input, select');
    let valido = true;
    let checkboxes = form.querySelectorAll('input[type="checkbox"][name="animal"]')
    let checkboxValid = Array.from(checkboxes).some(checkbox => checkbox.checked);
    // console.log(checkboxValid)
    
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
    //   if (!checkboxValid) {
    //     input.focus();
    //     valido = false;
    //     break;
    // } 
    }
  
    return valido;
  }
  
  function setupConfirmButtons() {
    let confirmButtons = document.querySelectorAll('.confirm-btn');
    confirmButtons.forEach(button => {
      button.addEventListener('click', event => {
        let serviceType = button.getAttribute('data-service');
        handleConfirmation(serviceType);
      });
    });
  }

  window.cancelarAgendamento = function () {
    main.style.opacity = '0';
    main.style.transition = 'opacity 0.3s ease-in-out';
    setTimeout(() => {
      main.style.opacity = '1';
      main.innerHTML = `
    <div class="btServico">
          <button class="service-btn" id="btn-veterinario">
              <img src="img/veterinario.jpg" alt="Veterinário">
              <span>Veterinário</span>
          </button>
          <button class="service-btn" id="btn-estetica">
              <img src="img/estetica.jpg" alt="Estética">
              <span>Estética</span>
          </button>
          <button class="service-btn" id="btn-daycare">
              <img src="img/daycare.jpg" alt="Day Care">
              <span>Day Care</span>
          </button>
          <button class="service-btn" id="btn-festa">
              <img src="img/festa.jpg" alt="Salão de Festa">
              <span>Salão de Festas</span>
          </button>
    </div>
      `;

      addEventListeners();
    }, 300);
  }

  function addEventListeners() {
    const serviceButtons = document.querySelectorAll('.service-btn');
    serviceButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        
        const serviceType = e.currentTarget.id.split('-')[1];
        showForm(serviceType);
      });
    });
  }

  const locationButton = document.querySelector('.location-btn');
  locationButton.addEventListener('click', () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Av.+Empresário+José+Carlos+Silva,+N.º+1706+Farolândia,+Aracaju-SE', '_blank');
  });

  addEventListeners()
});
