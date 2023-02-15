import { Route } from "@angular/router";
import { CartDescriptionComponent } from "./cart-description/cart-description.component";
import { ProductDescriptionComponent } from "./product-description/product-description.component";

export const detailedRouting: Route[] = [
    {path: 'detail', component: ProductDescriptionComponent},
    {path: 'carrito', component: CartDescriptionComponent}
]