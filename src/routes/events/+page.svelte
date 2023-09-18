<script>
import EventCard from "../../components/events/EventCard.svelte";
import YearWiseData from "../../data/events.json"

    let selectedYear = 2021
    let YearData = YearWiseData[selectedYear]
    let Events = Object.keys(YearData)
    console.log()

    function onYearClicked (year) {
        selectedYear = year
        YearData = YearWiseData[selectedYear]
        Events = Object.keys(YearData)
    }

    const Years = Object.keys(YearWiseData).reverse()
</script>	

<div class="flex flex-col items-center justify-between mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-0">
	<div class="py-12">
        <div class="text-5xl font-extrabold text-white py-12">
            Events
        </div>
        <div class="yearButtons flex items-center justify-between text-sm grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {#each Years as year}
                <div class="yearButtons flex items-center justify-center lg:px-10">
                    <label class="cursor-pointer">
                    <input type="radio" class="peer sr-only" name="year" on:change={() => { onYearClicked(year) }}/>
                    <div class="flex items-center justify-center m-1 max-w-xl px-5 py-3 rounded-md bg-slate-900 text-white ring-2 ring-transparent transition-all scale-95 hover:scale-100 hover:shadow peer-checked:text-rose-600 peer-checked:ring-pink-400 peer-checked:ring-offset-2">
                        {year}
                        <svg aria-hidden="true" class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                    </label>
                </div>
            {/each}
        </div>
		
            
            <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {#each Events as evnt}  
                {#each YearWiseData[selectedYear][evnt] as gathering}
                    <EventCard
                     url={gathering.url}
					 image={gathering.image}
					 title={gathering.title}
					 sub_title={gathering.sub_title}
					 venue={gathering.venue}
                     date={gathering.date}
					 data={gathering.data}
					 attendance={gathering.attandance}
                    />
                {/each}
                {/each}
            </div>
	</div>
</div>