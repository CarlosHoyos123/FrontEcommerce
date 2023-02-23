import { ProductStock } from "./productStock"
import { Color } from "./color"
import { Size } from "./size"
import { ProductDetailed } from "./productDetailed"

export interface ProductSummary {
    Stock: ProductStock[];
    colors: Color[];
    sizes: Size[];
    detalle: ProductDetailed;
}