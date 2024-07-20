<script>
    import {Github, Linkedin, Gmail} from 'svelte-simples';
    import me from '$lib/assets/me.png';
</script>

<div class="flex flex-row py-4" id="Hero">
    <div class="" id="left-side">
        <div class="">
            <h1 class="my-4">
                    Hello, world! I'm
                <span class="relative whitespace-nowrap font-bold">Ralf Michael Balatibat
                    <span class="absolute left-0 -bottom-1 h-1 w-full origin-left bg-red-500/50" style="width: 100%;"></span>
                    <span class="absolute -bottom-5 left-3 w-full text-xs opacity-60">but you can call me Ram!</span>
                </span>
            </h1>
            <h2 class="">
            Software Engineer, Game Developer, Passionate Learner, and Socially Enthusiastic <!-- add text above saying "but you can call me Ram!"-->
            </h2>

            <p>
                A passionate and outgoing computer scientist committed to a life of learning and growth as I dive into various projects, ideas, or activities that revolve around Web Development, Software Development and Engineering, and Game Development.
            </p>
        </div>
        <div class="">
            <!-- insert icons here -->
            <a href="/"><Github></Github></a>
            <a href="/"><Linkedin></Linkedin></a>
            <a href="/"><Gmail></Gmail></a>
        </div>
    </div>

    <div class="flex flex-row-reverse w-1/3" id="photo">
        <img src={me} alt="Ralf Michael Balatibat" class="mr-24">

    </div>
    <hr>
</div>
