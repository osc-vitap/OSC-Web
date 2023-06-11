<script>
  export let image = "";
  export let title = "";
  export let disc = "";
  export let link = "";
</script>

<div class="px-4 py-4">
<a href={link} target="_blank">
  <section class="rounded-lg bg-white  drop-shadow-2xl p-2">
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-center sm:min-h-[75px]">
      <img
        alt="OSC"
        src={image}
        class="aspect-square w-full rounded-lg object-cover drop-shadow-lg shadow-lg shadow-zinc-500/50"
      />

      <blockquote class="sm:col-span-2">
        <p class="text-md font-bold sm:text-md">
          {title}
        </p>
        <p class="">
          {disc}
        </p>
      </blockquote>
    </div>
  </section>
</a>
</div>
