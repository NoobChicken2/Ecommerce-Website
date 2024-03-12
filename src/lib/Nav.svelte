<script>

    let navLinks = [
        {
            title: 'Link 1',
            link: '',
        },
        {
            title: 'Link 2',
            link: '',
        },
        {
            title: 'Link 2',
            link: '',
        }
    ]

</script>

<main class="flex flex-row w-full h-[100px] border-white border-2">
    <div class="w-[200px]">

    </div>
    <div class="flex flex-row justify-start items-center border-2 border-red-900 w-full">
        {#each navLinks as nav}
            <div class="mx-6">
                <a href={nav.link}>{nav.title}</a>
            </div>
        {/each}
    </div>
    <div class="w-[200px]">

    </div>
</main>