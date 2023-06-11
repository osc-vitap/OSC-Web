<script>
  import TeamCard from "../../components/TeamCard.svelte";
  import YearCard from "../../components/YearCard.svelte";
  export let adminMembers = [
    {
      title: "Prof. Asish K. Dalai",
      disc: "Club Coordinator",
      image: "https://i.ibb.co/MMxvygZ/ashish/sir.png",
    },
    {
      title: "Rahul Alokkan",
      disc: "Community Lead",
      image: "https://i.ibb.co/sjwVdh9/rahul.png",
      link: "https://www.linkedin.com/in/rahul-alokkan-16384b196/",
    },
    {
      title: "Ojasva Jain",
      disc: "President",
      image: "https://i.ibb.co/p2hcgYv/ojasva.png",
      link: "https://www.linkedin.com/in/ojasva-jain-9958071b2",
    },
    {
      title: "Sai Pranay",
      disc: "Director",
      image: "https://i.ibb.co/M7LRvvZ/saipranay.png",
      link: "https://www.linkedin.com/in/saipranay47/",
    },
    {
      title: "Dhruv Jha",
      disc: "Secretary",
      image: "https://i.ibb.co/K5g2m1v/MG-5541.jpg",
      link: "https://www.linkedin.com/in/dhruv-jha-2002/",
    },
    {
      title: "Aashish",
      disc: "Head of PR",
      image: "https://i.ibb.co/3fK4w2w/aashish.png",
      link: "https://www.linkedin.com/in/aashis-rout-382b25229",
    },
    {
      title: "Sharath Harikumar",
      disc: "Treasurer",
      image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
      link: "https://oscvitap.org/",
    },
  ];
  export let techMembers = [
    {
      title: "Akhil",
      disc: "Technical Lead",
      image: "https://i.ibb.co/9hmFn9N/akhil.png",
      link: "https://www.linkedin.com/in/akhilcodes",
    },
    {
      title: "Aryan Mohanty",
      disc: "Track Lead",
      image: "https://i.ibb.co/M81PXN7/aryan.png",
      link: "https://www.linkedin.com/in/aryan-mohanty-230160221/",
    },
    {
      title: "A. Loukya",
      disc: "Developer",
      image: "https://i.ibb.co/SPj3Vpb/loukya.png",
      link: "https://www.linkedin.com/in/adepu-loukya-67a345221/",
    },
    {
      title: "Chandra Kiran Reddy Avula",
      disc: "DevOps Lead",
      image: "https://i.ibb.co/PF0v6wk/chandra.jpg",
      link: "https://www.linkedin.com/in/chandra-kiran-reddy-avula-69038a123/",
    },
    {
      title: "Jai Gaurav",
      disc: "Developer",
      image: "https://i.ibb.co/k3w4HcQ/gaurav.jpg",
      link: "https://www.linkedin.com/in/jai-gaurav-092656228/",
    },
    {
      title: "Avinash Kumar",
      disc: "Developer",
      image: "https://i.ibb.co/bbpzXMn/avinash.jpg",
      link: "https://www.linkedin.com/in/theavinash-kumar/",
    },
    {
      title: "R Hari Chandana",
      disc: "Developer",
      image: "https://i.ibb.co/Jp3xbgN/chandana.png",
      link: "https://www.linkedin.com/in/hari-chandana-5a6a621a8/",
    },
    {
      title: "Vuppula Saikrishna",
      disc: "Developer",
      image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
      link: "https://oscvitap.org/",
    },
  ];
  export let designMembers = [
    {
      title: "Pooja",
      disc: "Creative Lead",
      image: "https://i.ibb.co/NSN27zq/image.png",
      link: "https://www.linkedin.com/in/pooja-chowdhary-15501022b/",
    },
    {
      title: "Vemu Namratha",
      disc: "Editorial",
      image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
      link: "https://www.linkedin.com/mwlite/in/namratha-vemu-5650841b6",
    },
    {
      title: "Apoorva Parashar",
      disc: "Head of videography",
      image: "https://i.ibb.co/PwJ2tgQ/apoorva.png",
      link: "https://www.linkedin.com/in/apoorva-parashar-512bb722a/",
    },
    {
      title: "M Sricharan",
      disc: "Designer",
      image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
      link: "https://oscvitap.org/",
    },
    {
      title: "Soumyadip Chowdhuri",
      disc: "Designer",
      image: "https://i.ibb.co/GRK3Nz7/soumyadip.png",
      link: "https://www.linkedin.com/in/soumyadip-chowdhuri-b8641b250",
    },
    {
      title: "Isa Hassan",
      disc: "Designer",
      image: "https://i.ibb.co/kgwHypY/isa.jpg",
      link: "https://www.linkedin.com/in/isa-hasan-59375a226/",
    },
  ];
  export let eventsMembers = [
    {
      title: "Sai Eeshwar",
      disc: "Event Lead",
      image: "https://i.ibb.co/wcbjKvZ/image.png",
      link: "https://www.linkedin.com/in/sai-eeshwar-d-5a590922b/",
    },
    {
      title: "Muhammed Anas Shakil Kazi",
      disc: "Organizer",
      image: "https://i.ibb.co/vw0dPqd/anas.png",
      link: "https://www.linkedin.com/in/anas-kazi-88a064216/",
    },
    {
      title: "Pathuri Aleshita",
      disc: "Organizer",
      image: "https://i.ibb.co/dkJh4KC/image.png",
      link: "https://oscvitap.org/",
    },
    {
      title: "Varshitha Ramireddy",
      disc: "Organizer",
      image: "https://i.ibb.co/6wqbKv6/image.png",
      link: "https://www.linkedin.com/in/varshitha-ramireddy-a3ab1222a/",
    },
    {
      title: "Nishita Singh",
      disc: "Organizer",
      image: "https://i.ibb.co/4mL8JWZ/image.png",
      link: "https://www.linkedin.com/in/nishita-singh-161471231",
    },
    {
      title: "Sanjana Bhat",
      disc: "Organizer",
      image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp",
      link: "https://www.linkedin.com/in/sanjana-bhat-b5755b236/",
    },
    {
      title: "Aditya Papriwal",
      disc: "Head Of Marketing",
      image: "https://i.ibb.co/q1HhR52/image.png",
      link: "https://www.linkedin.com/in/aditya-papriwal-110912223",
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
        <div
          class="text-3xl animate-text pb-5 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black lg:px-4"
        >
          Tech Department
        </div>
        <div
          class="mt-5 mb-5 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4"
        >
          {#each techMembers as techMember}
            <TeamCard
              title={techMember.title}
              disc={techMember.disc}
              image={techMember.image}
              link={techMember.link}
            />
          {/each}
        </div>

        <div
          class="text-3xl animate-text pb-5 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black lg:px-4"
        >
          Creative Department
        </div>
        <div
          class="mt-5 mb-5 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4"
        >
          {#each designMembers as designMember}
            <TeamCard
              title={designMember.title}
              disc={designMember.disc}
              image={designMember.image}
              link={designMember.link}
            />
          {/each}
        </div>

        <div
          class="text-3xl animate-text pb-5 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black lg:px-4"
        >
          Events Department
        </div>
        <div
          class="mt-5 mb-5 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4"
        >
          {#each eventsMembers as eventsMember}
            <TeamCard
              title={eventsMember.title}
              disc={eventsMember.disc}
              image={eventsMember.image}
              link={eventsMember.link}
            />
          {/each}
        </div>
      </div>
    </section>
  </div>
</div>
