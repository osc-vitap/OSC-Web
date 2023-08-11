<script>
  export let link = "";
  export let year = "";
</script>

<div class="lg:px-16 items-center justify-center">
  <a
    href={link}
    class="mt-5 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
  >
    <span
      class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-teal-400 group-hover:opacity-100"
    />
    <!-- Top glass gradient -->
    <span
      class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"
    />
    <!-- Bottom gradient -->
    <span
      class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"
    />
    <!-- Left gradient -->
    <span
      class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"
    />
    <!-- Right gradient -->
    <span
      class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"
    />
    <span
      class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"
    />
    <span
      class="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56 opacity-5"
    />
    <span class="relative flex items-center">
      <span class=" text-xs sm:text-md">{year}</span>
    </span>
  </a>
</div>
