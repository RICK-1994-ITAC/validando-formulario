class validaFormulario {
    constructor(){
        this.campos = document.querySelectorAll('input')
        this.formulario = document.querySelector('.formulario')
        
    }
    
    eventoBotao(){
        this.formulario.addEventListener('submit',(e)=>{
            e.preventDefault()
            this.deleteError()
            this.validarCpf()
            this.validarUsuario()
            this.validaSenhas()
            this.validaCampos()
           if(this.enviarFormulario() ==='valido'){
            this.formulario.submit()
           }
        })
    }

    enviarFormulario(){
        let formularioValido;
        for(const div of this.campos){
            if(div.nextElementSibling.classList.contains('error')){
                return formularioValido = 'invalido'
            }
            
            formularioValido = 'valido'
        }
        return formularioValido
    }

    validaCampos(){
       
        for (const campo of this.campos) {
            if(!campo.value){
                const nomeCampo = campo.previousElementSibling.innerHTML
                this.criaDivErro(campo,`Campo ${nomeCampo} está vazio`)
                
            }
            
        }
    }

    validarCpf(){
        const cpfInput = document.querySelector('#cpf')
        const cpfEnviado = new gerarCpf(cpfInput.value)

        if(cpfEnviado.validaCpf()){
            this.criaDivErro(cpfInput,cpfEnviado.validaCpf())
            
        }
       
    }

    validarUsuario(){
        const campoUsuario = document.querySelector('#usuario')
        const usuario = campoUsuario.value

        if(!usuario.match(/^[a-zA-Z0-9]+$/g && usuario)){
            this.criaDivErro(campoUsuario,'Usuário só poderá conter letras e/ou números')
            
        }
    }

    validaSenhas(){
        const senha = document.querySelector('#senha')
        const repetirSenha = document.querySelector('#repetirsenha')

        if(senha.value!= repetirSenha.value) {
            this.criaDivErro(senha, 'As senhas devem ser idênticas')
            this.criaDivErro(repetirSenha,'As senhas devem ser idênticas')
            
        }
    }

    deleteError(){
        const msgsError = document.querySelectorAll('.error')
        for (const msg of msgsError) { 
            msg.remove()
        }
    }

    criaDivErro(campo,msg){
        const divErro = document.createElement('div')
        divErro.classList.add('error')
        divErro.innerHTML = msg
        campo.insertAdjacentElement("afterend",divErro)
    }
}

const validacao = new validaFormulario()
validacao.eventoBotao()