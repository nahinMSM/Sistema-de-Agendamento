function validarData() {

  // Lista de feriados (formato MM-DD)
  const feriados = [
    "01-01", // Ano Novo
    "04-21", // Tiradentes
    "05-01", // Dia do Trabalho
    "09-07", // Independência do Brasil
    "10-12", // Nossa Senhora Aparecida
    "11-02", // Finados
    "11-15", // Proclamação da República
    "12-25",  // Natal
    // Feriados em Aracaju
    "02-12",
    "02-13",
    "02-14", // Carnaval
    "03-17", // Aniversário de Aracaju
    "03-28",
    "03-29", // Paixão de Cristo
    "05-30", // Corpus Christi
    "06-24", // São João (ponto facultativo)
    "08-07", // Independencia de Sergipe
    "10-28", // Dia do Servidor Público (ponto facultativo)
    "11-20" // Dia da Consciência Negra
  ]

  document.querySelector('input[name="data-horario"]').addEventListener('input', function (event) {
    const input = event.target;
    const dataHorario = new Date(input.value)

    // Verificar se é domingo
    if (dataHorario.getDay() === 0) {
      alert("Não abrimos aos domingos!")
      input.value = "" // Limpa o valor do input
      return
    }

    // Verificar se é feriado
    const mesDia = ("0" + (dataHorario.getMonth() + 1)).slice(-2) + "-" + ("0" + dataHorario.getDate()).slice(-2)
    if (feriados.includes(mesDia)) {
      alert("Não abrimos nos feriados!")
      input.value = "" // Limpa o valor do input
      return
    }

    // Verificar se o horário está dentro do intervalo permitido
    const diaSemana = dataHorario.getDay()
    const horas = dataHorario.getHours()
    const minutos = dataHorario.getMinutes()

    if ((diaSemana >= 1 && diaSemana <= 5 && (horas < 7 || horas > 18 || (horas === 18 && minutos > 0))) ||
      (diaSemana === 6 && (horas < 8 || horas > 13 || (horas === 13 && minutos > 0)))) {
      alert("Horários de atendimento: de segunda a sexta das 7h às 18h, e sábado das 8h às 13h.")
      input.value = "" // Limpa o valor do input
      return
    }
  })
}