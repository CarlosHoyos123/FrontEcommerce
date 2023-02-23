import { ProductEntity } from "./productEntity";
import { Size } from "./size";
import { colorsAvailable } from "./color";

export interface CarResponse{
    idCar: number;
    producto:ProductEntity;
    talla: Size
    color: colorsAvailable;
    cantidad: number;
}