<script>
  import TeamCard from "../../components/TeamCard.svelte";
  import YearCard from "../../components/YearCard.svelte";
  export let adminMembers = [
    {
      title: "Prof. Asish K. Dalai",
      disc: "Club Coordinator (Faculty)",
      image: "https://i.ibb.co/MMxvygZ/ashish.png",
    },
    {
      title: "Akhil Surendran",
      disc: "President",
      image: "https://i.ibb.co/9HQghgN/image.png",
    },
    {
      title: "Agnibha Chatterjee",
      disc: "Technical Lead",
      image: "https://i.ibb.co/k1SKZ0G/image.png",
    },
    {
      title: "Soumya Sudipta",
      disc: "Director",
      image: "https://i.ibb.co/hZ4djZT/image.png",
    },
    {
      title: "Somsubro Banerjee",
      disc: "Head of Public Relations",
      image: "https://i.ibb.co/L6VFFCK/image.png",
    },
  ];
  export let yearCards = [
    {
      link: "/teams",
      year: "2023",
    },
    {
      link: "/teams-2022",
      year: "2022",
    },
    {
      link: "/teams-2021",
      year: "2021",
    },
    {
      link: "/teams-2020",
      year: "2020",
    },
    {
      link: "/teams-2019",
      year: "2019",
    },
    {
      link: "/teams-2018",
      year: "2018",
    },
  ];
</script>

<div class="max-w-full flex items-center justify-center">
  <div class="max-w-screen-xl">
    <section class="bg-transparent py-8">
      <div class="mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div class="text-5xl font-extrabold text-white py-12 lg:px-4">
          Our Team
        </div>
        <div
          class="items-center justify-center content-center text-sm grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6"
        >
          {#each yearCards as yearCard}
            <YearCard link={yearCard.link} year={yearCard.year} />
          {/each}
        </div>

        <div class="text-3xl font-extrabold text-white py-8 lg:px-4">
          Admin Department
        </div>
        <div
          class="mt-5 mb-5 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4"
        >
          {#each adminMembers as adminMember}
            <TeamCard
              title={adminMember.title}
              disc={adminMember.disc}
              image={adminMember.image}
              link={adminMember.link}
            />
          {/each}
        </div>
      </div>
    </section>
  </div>
</div>
