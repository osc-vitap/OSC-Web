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
        <Card img="src\images\ReacBootCamp.jpg">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React Bootcamp</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight pb-6">
              React Bootcamp gave students a turbocharged ride into the world of web development
            </p>
            <Badge color="dark">
              Dec 19, 2022 | 4 PM
            </Badge>
          </Card>
      </div>

         

          
       
    </div>
    </div>  
      
</div>
