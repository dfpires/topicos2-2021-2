class AppError {
    // declaração de 2 variáveis apenas de leitura - depois que o objeto é criado
    // não podemos alterar as variáveis
    public readonly message: string;
    public readonly statusCode: number;

    // criar o método construtor
    constructor(message: string, statusCode: number) {
        this.message  = message;
        this.statusCode = statusCode;
    }
}

// exporta classe
export default AppError;