import { products } from '$lib/products.js';

/** @type {import('./$types').PageLoad} */
export async function load() {
    return {
        products
    };
}