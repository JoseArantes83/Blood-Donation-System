class DoadorService {
    constructor(){
        this.apiBaseUrl = 'http://localhost:3000';
    }

    async buscarDoacoesByDoadorId(doadorId){
        const response = await fetch(`${this.apiBaseUrl}/doacao/${doadorId}/doacoes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
    });
        console.log("Buscou doacoes!");
        return response.json();
    }
}

export default new DoadorService();