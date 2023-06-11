<script>
  import TeamCard from "../../components/TeamCard.svelte";
  import { Button, GradientButton } from "flowbite-svelte";
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
</script>

<div class="max-w-full flex items-center justify-center">
  <div class="max-w-screen-xl">
    <section class="bg-transparent py-8">
      <div class="mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div class="text-5xl font-extrabold text-white py-12 lg:px-4">
          Our Team
        </div>
        <div class="items-center text-center flex justify-center">
          <ul class="text-center content-center flex items-center justify-center gap-6 text-sm">
            <li>
              <div>
                <a
                  href="/teams"
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
                    
                    <span class=" text-xs sm:text-md"
                      >2023</span
                    >
                  </span>
                </a>
              </div>
              
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
                    
                    <span class=" text-xs sm:text-md"
                      >2022</span
                    >
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
                    
                    <span class=" text-xs sm:text-md"
                      >2021</span
                    >
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
                    
                    <span class=" text-xs sm:text-md"
                      >2020</span
                    >
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
                    
                    <span class=" text-xs sm:text-md"
                      >2019</span
                    >
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
                    
                    <span class=" text-xs sm:text-md"
                      >2018</span
                    >
                  </span>
                </a>
              </div>
              
            </li>
          </ul>
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
