<script>
    import { fly } from 'svelte/transition';

    let imageRadio = "1";
    let lastIndex = imageRadio;
    let imgLinks = [ "https://upload.wikimedia.org/wikipedia/commons/4/40/Image_test.png", "https://haieng.com/wp-content/uploads/2017/10/test-image-500x500.jpg", "https://www.viewhotels.jp/ryogoku/wp-content/uploads/sites/9/2020/03/test-img.jpg"];
    let imgLink;
    
    setInterval( () => {
        let index = parseInt(imageRadio);
        index++;
        imageRadio = index % 4 == 0 ? "1" : index.toString() ;
    }, 10000);


    $: {
        imgLink = imgLinks[parseInt(imageRadio) - 1];

        lastIndex = imageRadio;
     };
</script>

<div class="flex flex-row h-[500px]">
    <div class="flex flex-col justify-center px-6 w-2/3 h-[100%] border-2 border-blue-900">
        <h1>
            Best brand for X
        </h1>
        <h2>
            You wont find anything better than y
        </h2>
    </div>
    <div class="relative flex justify-center items-center w-1/3 border-2 h-[100%] border-blue-900 select-none overflow-hidden">
        <!-- <div class="absolute inset-0 bg-gradient-to-l from-transparent to-black" />
        <div class="absolute inset-0 bg-gradient-to-r from-transparent to-black" /> -->
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