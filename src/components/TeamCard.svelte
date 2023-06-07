<script>
  export let image = "";
  export let title = "";
  export let disc = "";
  export let link = "";
</script>

<div class="mx-auto max-w-5xl px-4 py-4">
<a href={link} target="_blank">
  <section class="rounded-lg bg-gray-300 drop-shadow-2xl p-3">
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-center sm:min-h-[75px]">
      <img
        alt="TEDx Team Member"
        src={image}
        class="aspect-square w-full rounded-lg object-cover drop-shadow-lg shadow-lg shadow-zinc-500/50"
      />

      <blockquote class="sm:col-span-2">
        <p class="text-md font-bold sm:text-2xl">
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
