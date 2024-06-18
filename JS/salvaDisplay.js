function displaySavedData() {
  const main = document.querySelector('main');
  const agendamentos = ['veterinario', 'estetica', 'daycare', 'festa'];
  main.style.opacity = '0';
  main.style.transition = 'opacity 0.3s ease-in-out';

  setTimeout(() => {
    main.style.opacity = '1';

    let content = `
      <div class="btInicio" onclick="cancelarAgendamento()">
        <img src="img/home.svg" alt="Inicio">
      </div>
      <h2 class="h2Lista">Agendamentos Salvos</h2>`;

    agendamentos.forEach(serviceType => {
      const data = localStorage.getItem(`agendamento-${serviceType}`);
      if (data) {
        const parsedData = JSON.parse(data);
        content += `
          <div class="lista">
            <button class="deletList" onclick="deleteAppointment('${serviceType}')">
              <img src="img/delet.png" alt="Delete" class="default">
              <img src="img/deletOutClick.png" alt="Delete" class="hover">
            </button>
            <h3>${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}</h3>
            <ul>`;

        for (const [key, value] of Object.entries(parsedData)) {
          content += `
            <li>${key === 'data-horario' ? `${key}: ${formatDateTime(value)}` : `${key}: ${value}`}</li>`;
        }

        content += `
            </ul>
          </div>`;
      }
    });

    main.innerHTML = content;
  }, 300);
}


function deleteAppointment(serviceType) {
  localStorage.removeItem(`agendamento-${serviceType}`);
  displaySavedData();
}


function formatDateTime(dateTimeStr) {
  const date = new Date(dateTimeStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} às ${hours}:${minutes}h`;
}


const userButton = document.getElementById('user-button');
  userButton.addEventListener('click', () => {
    displaySavedData()
  });