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
                title="A. Chandra Kiran Reddy"
                disc="Developer"
                image="https://i.ibb.co/PF0v6wk/chandra.jpg"
                link="https://www.linkedin.com/in/chandra-kiran-reddy-avula-69038a123/"
            />
            <TeamCard
                title="Dhruv Jha"
                disc="Designer and Developer"
                image="https://i.ibb.co/K5g2m1v/MG-5541.jpg"
                link="https://www.linkedin.com/in/dhruv-jha-2002/"
            />
			<TeamCard
				title="Avinash Kumar"
				disc="Developer"
				image="https://i.ibb.co/bbpzXMn/avinash.jpg"
				link="https://www.linkedin.com/in/theavinash-kumar/"
			/>
			<TeamCard
				title="Sagnik Sarkar"
				disc="Editor"
				image="https://i.ibb.co/vstJH9B/sagnik.png"
				link="https://www.linkedin.com/in/sagnik-sarkar-710?trk=contact-info"
			/>
			<TeamCard
				title="Isa Hasan"
				disc="Outreach and Designer"
				image="https://i.ibb.co/kgwHypY/isa.jpg"
				link="https://www.linkedin.com/in/isa-hasan-59375a226/"
			/>
			<TeamCard
				title="Jai Gaurav"
				disc="Editor"
				image="https://i.ibb.co/k3w4HcQ/gaurav.jpg"
				link="https://www.linkedin.com/in/jai-gaurav-092656228"
			/>
			<TeamCard
				title="M. Anas Shakil Kazi"
				disc="Event Management"
				image="https://i.ibb.co/KyWvwvK/anas.jpg"
				link="https://www.linkedin.com/in/anas-kazi-88a064216/"
			/>
			
		</div>
	</div>
</section>
