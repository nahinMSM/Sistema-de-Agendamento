document.addEventListener('DOMContentLoaded',()=>{
  const btServico = document.querySelectorAll('.btn')
    btServico.forEach(button => {
      button.addEventListener('click', (e) => {
        // const buttonClass = button.classList[1]
        // console.log(`botão ${buttonClass} clicado!`)
        console.log(e.target.id)
      })
    })
})
