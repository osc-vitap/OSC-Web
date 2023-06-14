<script>
  import TeamCard from "./TeamCard.svelte";
  import { onMount } from "svelte";

  let teamData = {};
  let years = [];
  let selectedYear = null;

  async function fetchData() {
    const response = await fetch("http://localhost:3000/data");
    teamData = await response.json();

    console.log(teamData);

    years = Object.keys(teamData); // Get the years from the object keys
  }

  function handleClick(year) {
    selectedYear = year;
  }
</script>

<div class="max-w-screen-xl px-4 sm:px-6 lg:px-8">
  <div
    class="[column-fill:_balance] columns-2 md:columns-3 lg:columns-4 gap-5 sm:gap-2 my-2"
  >
    <h1>Team Page</h1>
    <button on:click={fetchData}>Fetch Data</button>

    {#each years as year}
      <button on:click={() => handleClick(year)}>Year {year}</button>
    {/each}
    <div>
      {#if selectedYear}
        <h2>Teams for Year {selectedYear}</h2>
        {#each teamData[selectedYear] as member (member.title)}
          <TeamCard {member} />
        {/each}
      {/if}
    </div>

    <!-- <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard /> -->
  </div>
</div>
