<script>
    export let product;
</script>

<div class="w-[300px] h-[400px] bg-white shadow rounded-lg overflow-hidden" key={product.id}>
    <a href='/{product.id}'>
        <img src={product.imageUrl} alt={product.title} class="w-full h-64 object-cover">
    </a>
    <div class="p-4">
        <h2 class="text-lg font-semibold text-gray-700">{product.title}</h2>
        <p class="text-gray-700 mt-2">{product.description}</p>
        <div class="flex justify-between items-center mt-4">
            <span class="text-gray-800 font-semibold">${product.price.toFixed(2)}</span>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Add to Cart</button>
        </div>
    </div>
</div>