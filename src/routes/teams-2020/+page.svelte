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
                title="Krishna Akhil A."
                disc="Community Leader"
                image="https://i.ibb.co/FBZZSNB/image.png"
            />
            <TeamCard
                title="Somsubro Banerjee"
                disc="Campus Club Captain"
                image="https://i.ibb.co/L6VFFCK/image.png"
            />
            <TeamCard
                title="Mohammad Abdul Razzaq"
                disc="President"
                image="https://i.ibb.co/HHKjpcF/image.png"
            />
            <TeamCard
                title="Shashaank Babu R"
                disc="Chairman"
                image="https://i.ibb.co/T4L5THH/image.png"
            />
            <TeamCard
                title="Aman Rangapur"
                disc="Director"
                image="https://i.ibb.co/Yph1s3H/image.png"
            />
            <TeamCard
                title="G V Datta Adithya"
                disc="Vice President"
                image="https://i.ibb.co/zXn7Z3f/image.png"
            />
            <TeamCard
                title="Vijay Balaji"
                disc="Vice President"
                image="https://i.ibb.co/7bMrgV0/image.png"
            />
            <TeamCard
                title="Rakesh Ranjan"
                disc="Secretary"
                image="https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp"
            />
            <TeamCard
                title="Jaswanthi Boppisetty"
                disc="Treasurer"
                image="https://i.ibb.co/Mg2wLZ6/image.pngh"
            />
            <TeamCard
                title="Jayakumar MHK"
                disc="Technical Lead"
                image="https://i.ibb.co/zPPWrgm/image.png"
            />
            <TeamCard
                title="Adarsh Srivastava"
                disc="Technical Lead"
                image="https://i.ibb.co/xmzvR6h/image.png"
            />
            <TeamCard
                title="Amit Kumar Sahu"
                disc="Track Lead"
                image="https://i.ibb.co/R2RzJrY/image.png"
            />
            <TeamCard
                title="Sai Pranay"
                disc="Track Lead (Web)"
                image="https://i.ibb.co/M7LRvvZ/saipranay.png"
            />
            <TeamCard
                title="Navya Katakam"
                disc="Event Manager"
                image="https://i.ibb.co/ch8jBgy/image.png"
            />
            <TeamCard
                title="Sanket Ashok Mahadik"
                disc="Event Lead"
                image="https://i.ibb.co/c3C4K2C/image.png"
            />
            <TeamCard
                title="S V Harshavardhan"
                disc="Public Relations"
                image="https://i.ibb.co/C0TvwDh/image.png"
            />
            <TeamCard
                title="Bhavana Mokkapati"
                disc="Editorial Lead"
                image="https://i.ibb.co/pLkmZ9g/image.png"
            />
            <TeamCard
                title="Abhay Chaudhary"
                disc="Graphic Designer"
                image="https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp"
            />
            <TeamCard
                title="Terala Srujan"
                disc="Graphic Designer"
                image="https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp"
            />
            <TeamCard
                title="Gunotham Solanki"
                disc="Head of Videography"
                image="https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp"
            />
            <TeamCard
                title="Saurav Menon"
                disc="Social Media Relations"
                image="https://i.ibb.co/Jyzr8bR/image.png"
            />
            <TeamCard
                title="Chirag Gupta"
                disc="Content Writer"
                image="https://i.ibb.co/jzv1qz7/image.png"
            />
            <TeamCard
                title="Angel Maria"
                disc="Content Writer"
                image="https://oscvitap.org/static/media/tba.7a6a6c54279a54d1977c.webp"
            />
		</div>
	</div>
</section>
