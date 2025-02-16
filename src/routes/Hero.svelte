<script>
    import {Github, Linkedin, Gmail} from 'svelte-simples';
    import me from '$lib/assets/me.png';
</script>

<div class="flex flex-row py-4 justify-center content-center" id="Hero">
    <div class="border border-gray-200 rounded-lg shadow w-2/3">
        <div class="m-6 space-y-2 rounded-2xl p-6" id="left-side">
            <div class="">
                <h1 class="my-8 text-5xl font-bold tracking-tight">
                        Hello, world! I'm
                    <span class="relative whitespace-nowrap">Ralf Michael
                        <span class="absolute left-0 -bottom-0 h-1 w-full origin-left bg-red-500/75" style="width: 100%;"></span>
                        <span class="absolute -bottom-4 right-0 w-full tracking-normal text-center text-xs opacity-60">but you can call me Ram!</span>
                    </span>
                </h1>
                <h2 class="font-bold text-xl">
                Software Engineer, Game Developer, Passionate Learner, and Leader
                </h2>

                <p class = my-4>
                    A passionate and outgoing computer scientist committed to a life of learning and growth as I dive into various projects, ideas, or activities that revolve around Web Development, Software Engineering, and Game Development.
                </p>
            </div>
            <div class="flex flex-row gap-2">
                <a href="https://github.com/TheRedSwaRM" target="_blank" rel="noreferrer noopener"><Github></Github></a>
                <a href="https://www.linkedin.com/in/ralf-michael-balatibat" target="_blank" rel="noreferrer noopener"><Linkedin></Linkedin></a>
            </div>
        </div>
    </div>

    <!-- <div class="flex flex-row-reverse w-1/3" id="photo">
        <img src={me} alt="Ralf Michael Balatibat" class="mr-24">

    </div> -->
</div>
