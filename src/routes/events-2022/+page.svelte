<script>
  import Events from '../../components/Events.svelte';
  import {Card,Badge} from 'flowbite-svelte';
  let isHovered = false;
</script>

<style>
  .card{
    transition: transform 0.2s;
  }

  .card:hover{
    transform:scale(1.1)
  }
</style>


<div class="flex flex-col items-center justify-centre max-w-full pt-5 sm:pt-16">
  <div>
  <Events/>
  
  <div class="mt-5 mb-5 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">

    <div class="card" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
      <Card img="src\images\GittyUp.webp">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GittyUp</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque consequuntur harum earum laudantium, nesciunt ea quo? 
          </p>
          <Badge color="dark">
            Sep 27, 2022 | 4 PM
          </Badge>
        </Card>
    </div>
       <div class="card" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
          <Card img="src\images\ReactBootCamp.webp">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React Bootcamp</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight pb-6">
                React Bootcamp gave students a turbocharged ride into the world of web development
              </p>
              <Badge color="dark">
                Dec 19, 2022 | 4 PM
              </Badge>
            </Card>
        </div>

        <div class="card" on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
          <Card img="src\images\TechEden.webp">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TechEden</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight pb-8">
                hunger games for coding not really but yes. There were less ppl.
              </p>
              <Badge color="dark">
                Dec 10, 2022 | 10 AM
              </Badge>
            </Card>
        </div>

       
               

       

        
     
  </div>
  </div>  
    
</div>
