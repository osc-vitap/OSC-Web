<script>
  import InfoSectionCard from "./LandingInfoCard.svelte";
  import TestIcon from "../../images/svg/airplane.svg";
</script>

<section>
  <div class="max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div
      class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div
        class="mx-auto max-w-lg text-center lg:text-left lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
      >
        <h1
          class="text-3xl font-extrabold sm:text-4xl animate-text pb-5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent"
        >
          What do we do?
        </h1>

        <p class="mt-4 text-zinc-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <a
          href="#_"
          class="mt-5 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
        >
          <span
            class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
          />
          <span class="relative group-hover:text-white">Join us today</span>
        </a>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <InfoSectionCard />

        <a
          class="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={TestIcon} class="h-6 w-6" />
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={TestIcon} class="h-6 w-6" />
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={TestIcon} class="h-6 w-6" />
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={TestIcon} class="h-6 w-6" />
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={TestIcon} class="h-6 w-6" />
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
