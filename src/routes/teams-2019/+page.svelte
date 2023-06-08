<script>
	import TeamCard from '../../components/TeamCard.svelte';
    import { Button } from 'flowbite-svelte';
    export let adminMembers = [
        {
            title: "Prof. Asish K. Dalai",
            disc: "Club Coordinator (Faculty)",
            image: "https://i.ibb.co/MMxvygZ/ashish.png"
        },
        {
            title: "Akhil Surendran",
            disc: "Community Leader",
            image: "https://i.ibb.co/9HQghgN/image.png"
        },
        {
            title: "Dedipyaman Das",
            disc: "Club Captain",
            image: "https://i.ibb.co/nL9dpFP/image.png"
        },
        {
            title: "Agnibha Chatterjee",
            disc: "Club Captain",
            image: "https://i.ibb.co/k1SKZ0G/image.png"
        },
        {
            title: "Ritwik Badola",
            disc: "Club Captain",
            image: "https://i.ibb.co/W0xLNd1/image.png"
        },
        {
            title: "Priyam Sahoo",
            disc: "Club Captain",
            image: "https://i.ibb.co/ChJdjd2/image.png"
        },
        {
            title: "Krishna Akhil A.",
            disc: "President",
            image: "https://i.ibb.co/FBZZSNB/image.png"
        },
        {
            title: "Somsubro Banerjee",
            disc: "Chairman",
            image: "https://i.ibb.co/y6WnL66/image.png"
        },
        {
            title: "Uday Shankar",
            disc: "Director",
            image: "https://i.ibb.co/7tgPGgN/image.png"
        },
        {
            title: "Jayat Saha",
            disc: "Vice President",
            image: "https://i.ibb.co/cF6kr51/image.png"
        },
        {
            title: "Manju Bhargavi",
            disc: "Secretary",
            image: "https://i.ibb.co/wCVvHcw/image.png"
        },
        {
            title: "Rahul P",
            disc: "Technical Lead",
            image: "https://i.ibb.co/z2hTmCm/image.png"
        }
    ]
    export let eventsMembers = [
        {
            title: "Datta Adithya",
            disc: "Event Lead",
            image: "https://i.ibb.co/zXn7Z3f/image.png"
        },
        {
            title: "Susmita Pal",
            disc: "Head of Marketing",
            image: "https://i.ibb.co/MgVbs0F/image.png"
        },
        {
            title: "S Vijay Balaji",
            disc: "Head, Public Relations",
            image: "https://i.ibb.co/7bMrgV0/image.png"
        }
    ]
    export let designMembers = [
        {
            title: "Glen Paulson",
            disc: "Head of Design",
            image: "https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp"
        }
    ]
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
        
        <div class="text-3xl font-extrabold text-black  lg:px-4">
            Admin Department
        </div>
            <div class="mt-5 mb-5 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4">
                {#each adminMembers as adminMember}
                <TeamCard
                title={adminMember.title}
                disc={adminMember.disc}
                image={adminMember.image}
                link={adminMember.link}
                />
                {/each}
            </div>
            
        <div class="text-3xl font-extrabold text-black  lg:px-4">
            Creative Department
        </div>
            <div class="mt-5 mb-5 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4">
                {#each designMembers as designMember}
                <TeamCard
                title={designMember.title}
                disc={designMember.disc}
                image={designMember.image}
                link={designMember.link}
                />
                {/each}
            </div>

        
        <div class="text-3xl font-extrabold text-black  lg:px-4">
            Events Department
        </div>
            <div class="mt-5 mb-5 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-3 xl:gap-1 lg:gap-1 xl:grid-cols-4">
                {#each eventsMembers as eventsMember}
                <TeamCard
                title={eventsMember.title}
                disc={eventsMember.disc}
                image={eventsMember.image}
                link={eventsMember.link}
                />
                {/each}
            </div>
	</div>
</section>
