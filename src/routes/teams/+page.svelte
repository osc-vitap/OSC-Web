<script>
  import TeamCard from "../../components/TeamCard.svelte";
  import { Button, GradientButton } from "flowbite-svelte";
  import YearCard from "../../components/YearCard.svelte";
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
  export let yearCards = [
    {
      link: "/teams",
      year: "2023",
    },
  ];
</script>

<div class="max-w-full flex items-center justify-center">
  <div class="max-w-screen-xl">
    <section>
      <div class=" px-4 py-12 sm:px-6 lg:px-8">
        <div class="text-5xl font-extrabold text-white py-12 lg:px-4">
          Our Team
        </div>
        <ul
          class="text-center content-center flex items-center justify-center gap-6 text-sm"
        >
          <li>
            {#each yearCards as yearCard}
              <YearCard link={yearCard.link} year={yearCard.year} />
            {/each}
          </li>
          <li>
            <div>
              <a
                href="/teams-2022"
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
                  <span class=" text-xs sm:text-md">2022</span>
                </span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="/teams-2021"
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
                  <span class=" text-xs sm:text-md">2021</span>
                </span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="/teams-2020"
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
                  <span class=" text-xs sm:text-md">2020</span>
                </span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="/teams-2019"
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
                  <span class=" text-xs sm:text-md">2019</span>
                </span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href="/teams-2018"
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
                  <span class=" text-xs sm:text-md">2018</span>
                </span>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <link rel="stylesheet" href="css/rrssb.css" />
      </div>
      <div
        class="mt-5 mb-5 self-stretch grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4"
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
    </section>
  </div>
</div>
