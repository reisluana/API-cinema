var id = 0

class Pedido {
    constructor(comidas, bebidas, combos, valor, pagamento, array, idExistente){
        if(array){
            if(idExistente){
                this.id = idExistente
            } 
            else {
                this.id = id++
            }
        }
        this.comidas = comidas
        this.bebidas = bebidas
        this.combos = combos 
        this.valor = valor
        this.pagamento = pagamento
    }

    /*_verificaCliente(cliente){
        if(cliente.length <= 3){
            throw new Error("nome de cadastro precisa ter mais de 3 caracteres")
        } else{
            return cliente 
        }
    }*/

}

module.exports = Pedido