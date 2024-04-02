// DTO FOR CREATION OF FORMS

//1ª FORMA --> PADRÃO QUE USAREMOS
export class CreateFormsDto {
    public conteudoTexto: String;
    public inteiro: Number;
    public booleano: Boolean;
    public opcaoSelect: String;
    public opcaoRadio: String;

    constructor(text: String, inteiro, Number, booleano: Boolean, opcaoSelect: String, opcaoRadio: String){
        this.conteudoTexto = text;
        this.inteiro = inteiro;
        this.booleano = booleano;
        this.opcaoSelect = opcaoSelect;
        this.opcaoRadio = opcaoRadio;
    }
}

//2ª FORMA
// export class CreateFormsDto {
//     constructor(
//         public conteudoTexto: String,
//         public inteiro: Number,
//         public booleano: Boolean,
//         public opcaoSelect: String,
//         public opcaoRadio: String
//     ){}
// }