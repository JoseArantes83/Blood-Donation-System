class DoadorService {
    constructor(){
        this.apiBaseUrl = 'http://localhost:3000';
    }

    async buscarDoador(doadorData){
        const response = await fetch(`${this.apiBaseUrl}/doador/query`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(doadorData),
    });
        return response.json();
    }

    async remover(doadorId) {
        await fetch(`${this.apiBaseUrl}/doador/${doadorId}`, {
            method: 'DELETE',
        });
    }

    async alterar(doador) {
        await fetch(`${this.apiBaseUrl}/doador/${doador.codigo}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doador),
        });
    }
}

export default new DoadorService();