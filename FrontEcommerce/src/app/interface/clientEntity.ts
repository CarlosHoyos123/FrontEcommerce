import { Country } from "./country";
import { IdType } from "./idType";
import { PhoneType } from "./phoneType";

export interface ClientEntity{
    cliente:            number;
    email:              String;
    contrasenia:        String;
    primerNombre:       String;
    segundoNombre:      String;
    primerApellido:     String;
    segundoApellido:    String;
    tipoTelefono:       PhoneType;
    telefono:           String;
    pais:               Country;
    numeroDocumento:    String;
    tipoDocumento:      IdType;
}