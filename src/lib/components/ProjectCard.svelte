<script lang="ts">
    export let project_image, project_title, project_description, project_link, project_link_desc: string;
</script>

<a href="{project_link}" class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <div class="flex-shrink-0 h-1/2">
        <img class="rounded-t-lg w-full h-full" src="{project_image}" alt="" />
    </div>
    <div class="flex flex-col flex-grow">
        <div class="px-5 pt-5 flex-grow">
            <a href="{project_link}">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project_title}</h5>
            </a>
            <p class="text-gray-700 pb-5">{project_description}</p>
        </div>
    </div>
    <div>
        <!-- TODO: add tech logos used for project here -->
    </div>
</a>