<script>
  import TestIcon from "../../images/svg/airplane.svg";
  export let title = "Sample Title";
  export let description = "Fuck VIT!";
  export let url = "#";
</script>

<a
  class="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
  href={url}
>
  <span class="inline-block rounded-lg bg-gray-50 p-3">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={TestIcon} class="h-6 w-6" />
  </span>

  <h2 class="mt-2 font-bold text-zinc-800">{title}</h2>

  <p class="text-xs sm:mt-1 sm:text-sm sm:text-gray-600">
    {description}
  </p>
</a>
