import { colorsAvailable } from "./color";
import { productInfo } from "./productDetailed";
import { ProductStock } from "./productStock";
import { Size } from "./size";

export interface DetailResponse{
    quantityAvailable:      ProductStock[],
    colorsAvailable:      colorsAvailable[],
    sizesAvailable:       Size[],
    productInfo:    productInfo
}