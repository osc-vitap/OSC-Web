<script>
  import InfoSectionCard from "./LandingInfoCard.svelte";

  const infoCardsData = [
    {
      title: "GITTY UP",
      description: "A workshop to teach Git & GitHub.",
      url: "#",
    },
    {
      title: "Idea Oryx",
      description: "An Ideathon to pitch your innovative ideas.",
      url: "#",
    },
    {
      title: "Bootcamps",
      description: "A course that teaches a certain skill from scratch.",
      url: "#",
    },
    {
      title: "Cyber Syndicate",
      description: "Annual Beginner Level Capture The Flag.",
      url: "#",
    },
    {
      title: "Tech Eden",
      description: "A Hackathon for Tech Enthusiasts.",
      url: "#",
    },
    {
      title: "SFF",
      description: "An Annual Fest to Celebrate Open-Source.",
      url: "#",
    },
  ];
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
          We offer a platform that brings together enthusiasts of open source
          technology, facilitating the sharing of knowledge and seamless
          collaboration. Our mission is to cultivate a culture of productive
          cooperation, enabling students to unite their efforts and embark on
          collective exploration beyond the traditional classroom setting.
        </p>

        <a
          href="https://forms.gle/fXRMynbsf1iVgJHz9"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
        >
          <span
            class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
          />
          <span class="relative group-hover:text-white">Join us today</span>
        </a>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {#each infoCardsData as cardData (cardData.title)}
          <InfoSectionCard
            title={cardData.title}
            description={cardData.description}
            url={cardData.url}
          />
        {/each}
      </div>
    </div>
  </div>
</section>
