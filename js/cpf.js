class gerarCpf {
    
    constructor(inputValue){
        this.onzeDigitos= inputValue
        this.noveDigitos = Array.from(this.onzeDigitos.slice(0,-2))
    }
    

    gerarDigito(cpfParcial){
        let multip = cpfParcial.length+1
        const soma = cpfParcial.reduce((ac,valor)=>{
                ac = ac + valor * multip
                multip --
                return ac
        },0)

        const digito = 11-(soma % 11)
        if(digito >= 10)return '0'
        return digito
    }

    cpfNovo(){
        let cpfParcial =this.noveDigitos
        const digito1 = this.gerarDigito(cpfParcial)
        
        cpfParcial = cpfParcial.join('') + digito1
        
        cpfParcial = Array.from(cpfParcial)
        
        const digito2 = this.gerarDigito(cpfParcial)
        
        const novoCpfGerado = cpfParcial.join('') + digito2
        return novoCpfGerado
        
    }

    validaSequencia(){
        const sequencia = this.onzeDigitos[0].repeat(11)
        return this.onzeDigitos === sequencia
    }

    validaCpf(){
        if(!this.onzeDigitos.length) return 'Nenhum cpf informado'
        if(this.validaSequencia()) return 'O cpf é uma sequência,portanto, inválido.'
        if(this.onzeDigitos.length != 11) return 'Preencha com 11 Números.'
        if(this.cpfNovo() != this.onzeDigitos)return 'Cpf Inválido.'
        
    }
}