class DoacaoService {
    constructor(){
        this.apiBaseUrl = 'http://localhost:3000';
    }

    async cadastrarDoacao(doacaoData) {
        const response = await fetch("http://localhost:3000/doacao", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(doacaoData),
        })
    }

    async buscarDoacoesByDoadorId(doadorId) {
        const response = await fetch(`${this.apiBaseUrl}/doacao/${doadorId}/doacoes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
    });
        console.log("Buscou doacoes!");
        return response.json();
    }

    async buscarDoacoes() {
        const response = await fetch(`${this.apiBaseUrl}/doacao`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log("Buscou doacoes!");
        return response.json();
    }

    async buscarDoacoesByFilter(dataRange) {
        const response = await fetch(`${this.apiBaseUrl}/doacao/by-date`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataRange)
        });
        console.log("Buscou doacoes por filtro!");
        return response.json();
    }
}

export default new DoacaoService();