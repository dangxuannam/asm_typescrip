import React from "react";
import { Product } from "../types/products";
type ShowInfoProps = {
   
    person:Product
}
const ShowInfo = (props: ShowInfoProps) => {
    console.log(props)
return (
    <div>Showinfo</div>
)
}
export default ShowInfo