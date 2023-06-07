<script>
    import { Card,Button, Badge } from 'flowbite-svelte';
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
                        <Button outline color="light">2023</Button>
                    </a>
                </li>
                <li>
                    <a href="/events-2022">
                        <Button outline color="light">2022</Button>
                    </a>
                </li>
                <li>
                    <a href="/events-2021">
                        <Button outline color="light">2021</Button>
                    </a>
                </li>   
                <li>
                    <a href="/events-2020">
                        <Button outline color="light">2020</Button>
                    </a>
                </li>
                <li>
                    <a href="/events-2019">
                        <Button outline color="light">2019</Button>
                    </a>
                </li> 
                <li>
                    <a href="/events-2018">
                        <Button outline color="light">2018</Button>
                    </a>
                </li>                                                                      
            </ul>
        </div>
          <div>
            <Card img="https://oscvitap.org/static/media/4.f0c6291e2c00644ded8f.jpg">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cyber Syndicate</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
                OSC organized a thrilling CTF event, challenging participants to navigate through cybersecurity puzzles and capture the flag.
              </p>
              <Badge color="dark">
                Jan 21, 2023 | 4 PM
              </Badge>
            </Card>
          </div>
	</div>
</section>