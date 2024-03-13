<script>
    import Nav from '$lib/Nav.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<Nav />
<main class="w-full flex px-12">
    <slot />
</main>
<Footer />