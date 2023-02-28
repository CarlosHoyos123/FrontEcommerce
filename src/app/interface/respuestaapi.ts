import { AdressToInvoice } from "./adressToInvoice";
import { AdressToSend } from "./adressToSend";
import { ClientEntity } from "./clientEntity";

export interface RespuestaApi {

    state: boolean;
    text: string;
    Type: string;
    client: ClientEntity;
    invoiceAdress: AdressToInvoice;
    sendAdress: AdressToSend;
}