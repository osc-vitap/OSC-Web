<script>
  import { fade, slide } from "svelte/transition";
  export let image = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png";
  export let title = "Sample Name";
  export let disc = "lorem ipsum dolor sit amet."; 
  export let link = "#";
</script>

<a in:slide href={link} target="_blank">
  <section class="mb-5 sm:mb-2 rounded-lg bg-white bg-opacity-90 drop-shadow-md hover:drop-shadow-lg p-2">
    <div class="grid grid-cols-1 gap-1 sm:gap-5 sm:grid-cols-3 sm:items-center sm:min-h-[75px]">
      <img
        alt="OSC"
        src={image}
        class="aspect-square w-full rounded-lg object-cover drop-shadow-sm shadow-lg shadow-zinc-400/50"
      />

      <blockquote class="sm:col-span-2">
        <p class="text-md font-bold sm:text-md text-zinc-800">
          {title}
        </p>
        <p class="text-sm text-zinc-500">
          {disc}
        </p>
      </blockquote>
    </div>
  </section>
</a>