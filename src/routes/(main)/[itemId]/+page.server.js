import { error } from '@sveltejs/kit';
import { products } from '$lib/products';

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    let product = products.find((product) => product.id == params.itemId );

    if(!product){
        throw error(404);
    }

    return {
        product
    };
}