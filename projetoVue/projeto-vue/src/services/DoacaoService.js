class DoadorService {
    constructor(){
        this.apiBaseUrl = 'http://localhost:3000';
    }

    async buscarDoacoesByDoadorId(doadorId){
        const response = await fetch(`${this.apiBaseUrl}/doacao/doador/${doadorId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(doadorData),
    });
        console.log("Buscou doacoes!");
        return response.json();
    }

    // async remover(doadorId) {
    //     await fetch(`${this.apiBaseUrl}/doador/${doadorId}`, {
    //         method: 'DELETE',
    //     });
    // }

    // async alterar(doador) {
    //     await fetch(`${this.apiBaseUrl}/doador/${doador.codigo}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(doador),
    //     });
    // }
}

export default new DoadorService();