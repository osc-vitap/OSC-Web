<script>
  import Events from '../../components/Events.svelte';
  import {Card,Badge} from 'flowbite-svelte';
  let isHovered = false;
</script>

<style>
  .card{
    transition: transform 0.3s;
  }

  .card:hover{
    transform:scale(1.2)
  }
</style>


<div class="flex flex-col items-center justify-centre max-w-full pt-5 sm:pt-16">
  <div>
  <Events/>
  
  <div class="mt-5 mb-5 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
       <div class="card" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
          <Card img="https://oscvitap.org/static/media/4.f0c6291e2c00644ded8f.jpg">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cyber Syndicate</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight pb-6">
                OSC organized a thrilling CTF event, challenging participants to navigate through cybersecurity puzzles and capture the flag.
              </p>
              <Badge color="dark">
                Jan 21, 2023 | 4 PM
              </Badge>
            </Card>
        </div>
              
     
  </div>
  </div>  
    
</div>
