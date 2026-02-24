export interface Data {
    codico: string | number;
    nome: string;
}

export interface Cotacao {
    valor: string;
    marca: string;
    modelo: string;
    anoModelo: number;
    combustivel: string;
    codigoFipe: string;
    mesReferencia: string;
    tipoVeiculo: number;
    siglaCombustivel: string;
}