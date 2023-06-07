<script>
    import { Card,GradientButton, Badge,Button } from 'flowbite-svelte';
</script>


<section class="bg-transparent py-8">
	<div class="mx-auto  px-4 py-2 sm:px-6 lg:px-8">
        <div class="text-5xl font-extrabold text-white py-12 lg:px-4 text-left">
            Events
        </div>
        <div class="items-center text-center flex justify-center">
            <ul class="text- flex items-center gap-6 text-sm">
                
                <li>
                    <a href="/events">
                      <GradientButton outline color="purpleToBlue" >2023</GradientButton>
                    </a>
                </li>
                <li>
                    <a href="/events-2022">
                        <GradientButton outline color="purpleToBlue">2022</GradientButton>
                    </a>
                </li>
                <li>
                    <a href="/events-2021">
                        <GradientButton outline color="purpleToBlue">2021</GradientButton>
                    </a>
                </li>   
                <li>
                    <a href="/events-2020">
                        <GradientButton outline color="purpleToBlue">2020</GradientButton>
                    </a>
                </li>
                <li>
                    <a href="/events-2019">
                        <GradientButton outline color="purpleToBlue">2019</GradientButton>
                    </a>
                </li> 
                <li>
                    <a href="/events-2018">
                        <GradientButton outline color="purpleToBlue">2018</GradientButton>
                    </a>
                </li>                                                                      
            </ul>
        </div>
          <div >
            <div class="mt-5 mb-5 grid grid-cols-2 gap-4 md:gap-2 lg:grid-cols-3">
                  <Card img="https://oscvitap.org/static/media/4.f0c6291e2c00644ded8f.jpg">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cyber Syndicate</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                      OSC organized a thrilling CTF event, challenging participants to navigate through cybersecurity puzzles and capture the flag.
                    </p>
                    <Badge color="dark">
                      Jan 21, 2023 | 4 PM
                    </Badge>
                  </Card>
                  <Card img="src\images\TechCastep4.jpg">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TechCast Ep. 4</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                      TechCast, OSC's online guest lecture series, transported students into the minds of industry experts, enriching their knowledge and inspiring innovation.
                    </p>
                    <Badge color="dark">
                      May 25, 2023 | 4 PM
                    </Badge>
                  </Card>
                  <Card img="src\images\GDSC.jpg">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SDG Open Hack</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                      SDG Open Hack united minds and technology, fostering collaborative solutions for a sustainable future.
                    </p>
                    <Badge color="dark">
                      Mar 12, 2023 | 10 AM
                    </Badge>
                  </Card>
                  
                    
            </div>
            
          </div>
	</div>
</section>