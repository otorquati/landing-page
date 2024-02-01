const btnFechar =  document.querySelector(".btn__fechar")
const msgErro = document.querySelector(".modal__msg_erro")
const msgSucesso = document.querySelector(".modal__msg_sucesso")
const modalEnviar = document.querySelector(".modal__enviar")
const btnEnviar = document.querySelector(".btn__enviar")
const validarDados = ({nome, email}) => {

    // Validar dados
    const nomeValido = nome && nome.length >=3
    const nomeMsg = nomeValido ? "" : "O nome é obrigatório e precisa ter no mínimo 3 caracteres"
    document.querySelector('.erro__nome').textContent = nomeMsg
    const emailRegex =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/
    const emailValido = email && emailRegex.test(email)
    const emailMsg = emailValido ? "" : "O email é obrigatório e precisa ser válido"
    document.querySelector('.erro__email').textContent = emailMsg

    return {
        nomeValido,
        emailValido
    }
}

const pegarDados = () => {
    // Pegar dados do formulário
    const dados = {
        nome: document.querySelector('.input__nome').value,
        email: document.querySelector('.input__email').value
    }
    
    // Validar dados
    
    const {nomeValido, emailValido} = validarDados(dados)
    //console.log(nomeValido, emailValido)
    if (nomeValido && emailValido) document.querySelector('form').reset()
    return (nomeValido && emailValido) ? 'sucesso' : 'erro'
    
}

const mostrarModal = (statusRegister) => {
    formatarModal(statusRegister)
    // Mostrar Modal
    modalEnviar.showModal()
}

const formatarModal = (statusRegister) => {
    // Foramtação condicional 
    console.log(statusRegister)
    msgSucesso.style.display = (statusRegister === 'sucesso') ? 'block' : 'none'
    msgErro.style.display = (statusRegister === 'erro') ? 'block' : 'none'
    btnFechar.classList.add((statusRegister === 'sucesso') ? 'bg__sucesso' : 'bg__erro')
    btnFechar.classList.remove((statusRegister === 'erro') ? 'bg__sucesso' : 'bg__erro')
}

btnEnviar.addEventListener( 'click', (e) => {
    e.preventDefault()
    // Pegar dados do formulario
    
    mostrarModal(pegarDados())
});

btnFechar.addEventListener( 'click', () => {
document.querySelector(".modal__enviar").close()
})
