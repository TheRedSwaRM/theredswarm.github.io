<script lang="ts">
    export let project_image, project_title, project_description, project_link, project_link_desc: string;
</script>

<!-- TODO: fix one of the buttons that goes beyond the card -->

<div class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow"> 
    <a href="{project_link}" class="flex-shrink-0 h-1/2">
        <img class="rounded-t-lg w-full h-full" src="{project_image}" alt="" />
    </a>
    <div class="flex flex-col flex-grow">
        <div class="px-5 pt-5 flex-grow">
            <a href="{project_link}">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project_title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project_description}</p>
        </div>
        <div class="px-5 pb-5 mt-auto">
            <a href="{project_link}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {project_link_desc}
                <svg class="rtl:rotate-180 w-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</div>
