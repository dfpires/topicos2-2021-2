class AppError {
    // declaração de 2 variáveis apenas de leitura - depois que o objeto é criado
    // não podemos alterar as variáveis
    public readonly message: string;
    public readonly statusCode: number;

    // criar o método construtor
    // se não for passado valor para statusCode, o valor padrão será 400
    constructor(message: string, statusCode = 400) {
        this.message  = message;
        this.statusCode = statusCode;
    }
}

// exporta classe
export default AppError;