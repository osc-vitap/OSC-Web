<script>
	import TeamCard from '../../components/TeamCard.svelte';
    import { Button } from 'flowbite-svelte';
</script>



<section class="bg-transparent py-8">
	<div class="mx-auto  px-4 py-2 sm:px-6 lg:px-8">
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
        <div class="mt-5 mb-5 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4">
            <TeamCard
                title="Prof. Asish K. Dalai"
                disc="Club Coordinator (Faculty)"
                image="https://i.ibb.co/MMxvygZ/ashish.png"
            />
            <TeamCard
                title="Akhil Surendran"
                disc="President"
                image="https://i.ibb.co/9HQghgN/image.png"
            />
            <TeamCard
                title="Agnibha Chatterjee"
                disc="Technical Lead"
                image="https://i.ibb.co/k1SKZ0G/image.png"
            />
            <TeamCard
                title="Soumya Sudipta"
                disc="Director"
                image="https://i.ibb.co/hZ4djZT/image.png"
            />
            <TeamCard
                title="Somsubro Banerjee"
                disc="Head of Public Relations"
                image="https://i.ibb.co/L6VFFCK/image.png"
            />
		</div>
	</div>
</section>
