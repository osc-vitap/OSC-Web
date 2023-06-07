<script>
  import TeamCard from "../../components/TeamCard.svelte";
  import { Button } from "flowbite-svelte";
  export let teamMembers = [
    {
      title: "Prof. Asish K. Dalai",
      disc: "Club Coordinator (Faculty)",
      image: "https://i.ibb.co/MMxvygZ/ashish.png",
    },
    {
      title: "A. Chandra Kiran Reddy",
      disc: "Community Lead",
      image: "https://i.ibb.co/PF0v6wk/chandra.jpg",
      link: "https://www.linkedin.com/in/chandra-kiran-reddy-avula-69038a123/",
    },
    {
      title: "Dhruv Jha",
      disc: "Designer and Developer",
      image: "https://i.ibb.co/K5g2m1v/MG-5541.jpg",
      link: "https://www.linkedin.com/in/dhruv-jha-2002/",
    },
    {
      title: "Avinash Kumar",
      disc: "Director",
      image: "https://i.ibb.co/bbpzXMn/avinash.jpg",
      link: "https://www.linkedin.com/in/theavinash-kumar/",
    },
    {
      title: "M. Anas Shakil Kazi",
      disc: "Secretery",
      image: "https://i.ibb.co/KyWvwvK/anas.jpg",
      link: "https://www.linkedin.com/in/anas-kazi-88a064216/",
    },
    {
      title: "Aryan Mohanty",
      disc: "Tech Lead",
      image: "https://i.ibb.co/M81PXN7/aryan.png",
      link: "https://www.linkedin.com/in/aryan-mohanty-230160221/",
    },
    {
      title: "R Hari Chandana",
      disc: "PR",
      image: "https://i.ibb.co/Jp3xbgN/chandana.png",
      link: "https://www.linkedin.com/in/hari-chandana-5a6a621a8/",
    },
    {
      title: "Soumyadip Chowdhuri",
      disc: "Designer",
      image: "https://i.ibb.co/GRK3Nz7/soumyadip.png",
      link: "https://www.linkedin.com/in/soumyadip-chowdhuri-b8641b250",
    },
    {
      title: "Isa Hasan",
      disc: "Outreach and Designer",
      image: "https://i.ibb.co/kgwHypY/isa.jpg",
      link: "https://www.linkedin.com/in/isa-hasan-59375a226/",
    },
    {
      title: "Sagnik Sarkar",
      disc: "Editor",
      image: "https://i.ibb.co/vstJH9B/sagnik.png",
      link: "https://www.linkedin.com/in/sagnik-sarkar-710?trk=contact-info",
    },
    {
      title: "Jai Gaurav",
      disc: "Editor",
      image: "https://i.ibb.co/k3w4HcQ/gaurav.jpg",
      link: "https://www.linkedin.com/in/jai-gaurav-092656228",
    },
    {
      title: "Apoorva Parashar",
      disc: "Head of videography",
      image: "https://i.ibb.co/PwJ2tgQ/apoorva.png",
      link: "https://www.linkedin.com/in/apoorva-parashar-512bb722a/",
    },
  ];
</script>

<div class="">
  <section>
    <div class=" px-4 py-12 sm:px-6 lg:px-8">
      <div class="text-5xl font-extrabold text-black py-12 lg:px-4">
        Our Team
      </div>
      <div class="items-center text-center flex justify-center">
        <ul class="text- flex items-center gap-6 text-sm">
          <li>
            <a href="/teams">
              <Button outline color="light">2023</Button>
            </a>
          </li>
          <li>
            <a href="/teams-2022">
              <Button outline color="light">2022</Button>
            </a>
          </li>
          <li>
            <a href="/teams-2021">
              <Button outline color="light">2021</Button>
            </a>
          </li>
          <li>
            <a href="/teams-2020">
              <Button outline color="light">2020</Button>
            </a>
          </li>
          <li>
            <a href="/teams-2019">
              <Button outline color="light">2019</Button>
            </a>
          </li>
          <li>
            <a href="/teams-2018">
              <Button outline color="light">2018</Button>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <link rel="stylesheet" href="css/rrssb.css" />
      </div>
      <div
        class="mt-5 mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4"
      >
        {#each teamMembers as teamMember}
          <TeamCard
            title={teamMember.title}
            disc={teamMember.disc}
            image={teamMember.image}
            link={teamMember.link}
          />
        {/each}
      </div>
    </div>
  </section>
</div>
