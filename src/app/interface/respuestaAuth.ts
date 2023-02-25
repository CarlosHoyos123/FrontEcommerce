import { ClientEntity } from "./clientEntity";


export interface RespuestaAuth {
    estado: boolean;
    texto: string;
    tipo: string;
    cliente: ClientEntity;
    
}