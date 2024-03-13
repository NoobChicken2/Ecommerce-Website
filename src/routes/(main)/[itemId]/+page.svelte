<script>
    export let data;

    let { product } = data;
</script>

<main class="w-full flex min-h-[600px]">
    <div class="w-full flex">
        <div class="w-1/3 mx-12 flex justify-start">
            <img src={product.imageUrl} alt="product img" class="object-cover">
        </div>
        <div class="flex flex-col w-2/3 mx-12 px-12 *:my-6">
            <h1 class="text-center text-3xl font-bold">{product.title}</h1>
            <h2 class="text-l">Description:<br>{product.description}</h2>
            <h3>Price:<br>${product.price}</h3>
            <span class="w-full flex justify-center">
                <button class="w-2/3 h-[50px] rounded-3xl text-black bg-white border-2 border-black">Add to cart</button>
            </span>
        </div>
    </div>
</main>

