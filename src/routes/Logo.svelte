<script context="module" lang="ts">
    export interface Props {
        src: string;
        lang: string;
        margin?: `m-${number}`; // = 'm-2';
        width?: `w-${TailwindDimension}`; // = 'w-12';
        height?: `h-${TailwindDimension}`; // = 'h-12';
    }

    export type TailwindDimension = number | 'auto';

</script>

<script lang="ts">
    const { 
        src,
        name,
        margin = 'm-2',
        width = 'w-12',
        height = 'h-12'
    } = $$props;
</script>

<figure class="inline-block {margin}">
    <img 
        {src}
        alt="{name} Logo"
        loading="lazy"
        class="m-auto {height} {width}"
    />
    <figcaption class="text-center">{name}</figcaption>
</figure>