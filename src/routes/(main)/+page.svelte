<script>
    import { fly } from 'svelte/transition';

    let imageRadio = "1";
    let imgLinks = [ "https://upload.wikimedia.org/wikipedia/commons/4/40/Image_test.png", "https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg", "https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"];
    let imgLink;
    
    setInterval( () => {
        let index = parseInt(imageRadio);
        index++;
        imageRadio = index % 4 == 0 ? "1" : index.toString();
    }, 10000);


    $: {
        imgLink = imgLinks[parseInt(imageRadio) - 1];
     };
</script>

<main>
    <div class="flex flex-row h-[500px]">
        <div class="flex flex-col justify-center px-6 w-2/3 h-[100%]">
            <h1>
                Best brand for X
            </h1>
            <h2>
                You wont find anything better than y
            </h2>
        </div>
        <div class="relative flex justify-center items-center w-1/3 h-[100%] select-none overflow-hidden">
            {#key imgLink}
                <img src={imgLink} alt="Test" in:fly={{ x: 100 , delay: 300, duration: 300  }} out:fly={{ x: -100, duration: 300 }}>
            {/key}
            <span class="absolute bottom-20">
                <input class="cursor-pointer" type="radio" bind:group={imageRadio} value=1 checked>
                <input class="cursor-pointer" type="radio" bind:group={imageRadio} value=2>
                <input class="cursor-pointer" type="radio" bind:group={imageRadio} value=3>
            </span>
        </div>
    </div>
    <section class="flex flex-col">
        <div class="flex justify-center items-center">
            <h1 class="text-6xl font-bold">Preview</h1>
        </div>
        <div class="flex flex-row h-[500px]">
            <div class="flex justify-center items-center w-1/2">
                <img src={imgLinks[0]} alt='Preview 1'>
            </div>
            <div class="flex justify-center items-center w-1/2 px-14">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
        <div class="flex flex-row h-[500px]">
            <div class="flex justify-center items-center w-1/2 px-14">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div class="flex justify-center items-center w-1/2">
                <img src={imgLinks[1]} alt='Preview 1'>
            </div>
        </div>
        <div class="flex flex-row h-[500px]">
            <div class="flex justify-center items-center w-1/2">
                <img src={imgLinks[2]} alt='Preview 1'>
            </div>
            <div class="flex justify-center items-center w-1/2 px-14">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    </section>
</main>