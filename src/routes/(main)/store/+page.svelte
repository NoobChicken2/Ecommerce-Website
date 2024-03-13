<script>
    import ItemCard from '$lib/ItemCard.svelte';

    export let data;
    let products = data.products;
    
    let filters = [
        {
            filter: 'Test'
        },
        {
            filter: 'Test2'
        },
        {
            filter: 'Test3'
        }
    ]

    let filterToggle = false;
</script>

<main class="w-full flex flex-row">
    <section class="w-1/5 flex justify-start"> 
        <div class="min-w-[200px] w-1/6">
            <button on:click={() => { filterToggle = !filterToggle; }} class="relative flex flex-row w-full h-[50px] justify-center items-center border-white border-2">
                <h1>Filters</h1>
                <span class="absolute right-[25px]">
                    {!filterToggle ? '▼' : '▲'}
                </span>
            </button>
            <div class="{!filterToggle ? 'h-0' : 'h-[300px]'} overflow-hidden transition-all ease-in-out duration-300 border-b-2 border-white">
                {#each filters as filter}
                    <div class="flex justify-between px-6 py-1">
                        <h1>{filter.filter}</h1>
                        <input type='checkbox'>
                    </div>
                {/each}
            </div>
        </div>
    </section>
    <section class="w-4/5 flex justify-center ">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each products as product}
                <ItemCard {product} />
            {/each}
        </div>
    </section>
</main>

