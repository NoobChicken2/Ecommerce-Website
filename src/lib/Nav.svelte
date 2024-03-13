<script>

    let navLinks = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Store',
            link: '/store',
        },
        {
            title: 'About Us',
            link: '/about',
        }
    ]

</script>

<main class="flex flex-row w-full h-[100px] text-white bg-black">
    <div class="w-[200px]">
        <p>
            Logo
        </p>
    </div>
    <div class="flex flex-row justify-start items-center w-full">
        {#each navLinks as nav}
            <div class="mx-6">
                <a href={nav.link}>{nav.title}</a>
            </div>
        {/each}
    </div>
    <div class="flex justify-center items-center w-[200px]">
        <p>
            <a href="/cart"><i class="fa-solid fa-cart-shopping fa-2xl"></a>
        </p>
    </div>
</main>