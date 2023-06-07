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
                title="S Vijay Balaji"
                disc="Community Lead"
                image="https://i.ibb.co/7bMrgV0/image.png"
                link="https://www.linkedin.com/in/svijayb/"
            />
            <TeamCard
                title="Datta Adithya G V"
                disc="President"
                image="https://i.ibb.co/zXn7Z3f/image.png"
                link="https://www.linkedin.com/in/datta-adithya/"
            />
			<TeamCard
				title="Bhargavi Chada"
				disc="Chairperson"
				image="https://i.ibb.co/T0T0Mbc/image.png"
				link="https://www.linkedin.com/in/bhargavi-chada/"
			/>
			<TeamCard
				title="S.V. Harsha Vardhan"
				disc="Director"
				image="https://i.ibb.co/C0TvwDh/image.png"
				link="https://www.linkedin.com/in/harshavardhan-samudrala-3ba66a216/"
			/>
			<TeamCard
				title="Ojasva"
				disc="Vice President"
				image="https://i.ibb.co/p2hcgYv/ojasva.png"
				link="https://www.linkedin.com/in/ojasva-jain-9958071b2"
			/>
			<TeamCard
				title="Sai Pranay"
				disc="Vice President"
				image="https://i.ibb.co/M7LRvvZ/saipranay.png"
				link="https://www.linkedin.com/in/saipranay47/"
			/>
			<TeamCard
                title="Dhruv Jha"
                disc="Secretary"
                image="https://i.ibb.co/K5g2m1v/MG-5541.jpg"
                link="https://www.linkedin.com/in/dhruv-jha-2002/"
            />
            <TeamCard
                title="Lakshmi Teja P"
                disc="Treasurer"
                image="https://i.ibb.co/KKgb8mh/image.png"
                link="https://www.linkedin.com/in/lakshmi-teja-bb45861a1/"
            />
            <TeamCard
                title="Tarini"
                disc="Head of public relations"
                image="https://i.ibb.co/tM5GT5Z/image.png"
                link="https://www.linkedin.com/in/tarinig/"
            />
            <TeamCard
                title="Ashutosh Patel"
                disc="Track Lead"
                image="https://i.ibb.co/h8Nrv03/image.png"
                link="https://www.linkedin.com/in/ashutosh-patel-a828a4221/"
            />
            <TeamCard
                title="Krishna Raj"
                disc="Technical Lead"
                image="https://i.ibb.co/610YkLz/image.png"
                link="https://www.linkedin.com/in/n-krishna-raj/"
            />
            <TeamCard
                title="Aryan Mohanty"
                disc="Technical Lead"
                image="https://i.ibb.co/M81PXN7/aryan.png"
                link="https://www.linkedin.com/in/aryan-mohanty-230160221/"
            />
            <TeamCard
                title="Ashutosh Patel"
                disc="Track Lead"
                image="https://i.ibb.co/h8Nrv03/image.png"
                link="https://www.linkedin.com/in/ashutosh-patel-a828a4221/"
            />
            <TeamCard
                title="Mahesh Dasika"
                disc="Developer"
                image="https://i.ibb.co/pf7LqWj/image.png"
                link="https://www.linkedin.com/in/mahesh-d-178b681b8/"
            />
            <TeamCard
                title="A. Loukya"
                disc="Developer"
                image="https://i.ibb.co/SPj3Vpb/loukya.png"
                link="https://www.linkedin.com/in/adepu-loukya-67a345221/"
            />
            <TeamCard
				title="Sai Pranay"
				disc="Developer"
				image="https://i.ibb.co/K5g2m1v/MG-5541.jpg"
				link="https://www.linkedin.com/in/saipranay47/"
			/>
            <TeamCard
				title="Jai Gaurav"
				disc="Developer"
				image="https://i.ibb.co/k3w4HcQ/gaurav.jpg"
				link="https://www.linkedin.com/in/jai-gaurav-092656228/"
			/>
            <TeamCard
                title="Patil Krishna Reddy"
                disc="Developer"
                image="https://i.ibb.co/5Gh1CS9/image.png"
                link="https://www.linkedin.com/in/krishna-reddy-399093222/"
            />
            <TeamCard
                title="A. Chandra Kiran Reddy"
                disc="Developer"
                image="https://i.ibb.co/PF0v6wk/chandra.jpg"
                link="https://www.linkedin.com/in/chandra-kiran-reddy-avula-69038a123/"
            />
            <TeamCard
                title="Jaitra Venkiteela"
                disc="Developer"
                image="https://i.ibb.co/FX2w8fx/image.png"
                link="https://oscvitap.org/"
            />
            <TeamCard
                title="Maruti"
                disc="Event Lead"
                image="https://i.ibb.co/PYCSzmV/image.png"
                link="https://www.linkedin.com/in/maruti-kameshwar-6b8846215/"
            />
            <TeamCard
                title="Chethan"
                disc="Event Lead"
                image="https://i.ibb.co/S6yZ0Bm/image.png"
                link="https://www.linkedin.com/in/chethan-tirupati-523251194"
            />
            <TeamCard
                title="Rahul Alokkan"
                disc="Event Lead"
                image="https://i.ibb.co/sjwVdh9/rahul.png"
                link="https://www.linkedin.com/in/rahul-alokkan-16384b196/"
            />
            <TeamCard
                title="Kaarthik"
                disc="Head of Marketing"
                image="https://i.ibb.co/h9ktpQc/image.png"
                link="https://www.linkedin.com/in/kaarthik-patibandla-30017219a/"
            />
            <TeamCard
                title="Nishita Singh"
                disc="Organiser"
                image="https://i.ibb.co/4mL8JWZ/image.png"
                link="https://oscvitap.org/"
            />
            <TeamCard
                title="Sai Eeshwar D"
                disc="Organiser"
                image="https://i.ibb.co/wcbjKvZ/image.png"
                link="https://www.linkedin.com/in/sai-eeshwar-d-5a590922b/"
            />
            <TeamCard
                title="R. Soundarya"
                disc="Organiser"
                image="https://i.ibb.co/g6pwnr1/image.png"
                link="https://www.linkedin.com/in/soundarya-ravikumar-0819661b8/"
            />
            <TeamCard
                title="Aditya Papriwal"
                disc="Head Of Marketing"
                image="https://i.ibb.co/q1HhR52/image.png"
                link="https://www.linkedin.com/in/aditya-papriwal-110912223"
            />
            <TeamCard
                title="Sabareesh Reddy"
                disc="Creative Lead"
                image="https://i.ibb.co/bPTmPMr/image.png"
                link="https://www.linkedin.com/in/sabareesh-reddy-chowkacherla-6834a6196/"
            />
            <TeamCard
                title="Sai Shaket Kalivarapu"
                disc="Chief Editor"
                image="https://i.ibb.co/BKRyyB2/image.png"
                link="https://www.linkedin.com/in/sai-shaket-kalivarapu-51327618a/"
            />
            <TeamCard
                title="Abhiram"
                disc="Head of videography"
                image="https://i.ibb.co/nkTSXJT/image.png"
                link="https://www.linkedin.com/in/abhiram-kalyan-883445190/"
            />
            <TeamCard
                title="Apoorva Parashar"
                disc="Head of videography"
                image="https://i.ibb.co/PwJ2tgQ/apoorva.png"
                link="https://www.linkedin.com/in/apoorva-parashar-512bb722a/"
            />
            <TeamCard
                title="Chirag"
                disc="Documentation specialist"
                image="https://i.ibb.co/jzv1qz7/image.png"
                link="https://www.linkedin.com/in/chirag-gupta-8a16161ba"
            />
            <TeamCard
                title="Vadakattu Sreekar"
                disc="Documentation specialist"
                image="https://i.ibb.co/cNXYLPG/image.png"
                link="https://www.linkedin.com/in/sreekar-vadakattu-8a54361b2/"
            />
            <TeamCard
				title="Sai Pranay"
				disc="Designer"
				image="https://i.ibb.co/M7LRvvZ/saipranay.png"
				link="https://www.linkedin.com/in/saipranay47/"
			/>
            <TeamCard
                title="Praseeda kallakuri"
                disc="Designer"
                image="https://i.ibb.co/rQn9GjN/image.png"
                link="https://www.linkedin.com/in/praseeda-kallakuri-970334221/"
            />
            <TeamCard
                title="Pooja"
                disc="Designer"
                image="https://i.ibb.co/NSN27zq/image.png"
                link="https://www.linkedin.com/in/pooja-chowdhary-15501022b/"
            />
            <TeamCard
                title="Sai Sreeja"
                disc="Designer"
                image="https://i.ibb.co/wSqJqTG/image.png"
                link="https://www.linkedin.com/mwlite/in/sai-sreeja-64325721b"
            />
            <TeamCard
                title="Yash Daga"
                disc="Designer"
                image="https://i.ibb.co/qrCJbGY/image.png"
                link="https://www.linkedin.com/in/yashdaga17/"
            />
            <TeamCard
                title="Angel Maria Stanley"
                disc="HR Lead"
                image="https://i.ibb.co/Yh7G5xx/image.png"
                link="https://www.linkedin.com/in/angel-stanly-218a0893/"
            />
            <TeamCard
                title="Muhammed Anas Shakil Kazi"
                disc="HR Manager"
                image="https://i.ibb.co/KyWvwvK/anas.jpg"
                link="https://www.linkedin.com/in/anas-kazi-88a064216/"
            />
            <TeamCard
                title="Dollu Vakuladevi"
                disc="HR Manager"
                image="https://i.ibb.co/RbxyGs8/image.png"
                link="https://www.linkedin.com/in/varshita-dollu-a3b43a197/"
            />
            <TeamCard
                title="Gudiseva Akhil"
                disc="HR Manager"
                image="https://i.ibb.co/K9LpT0M/image.png"
                link="https://www.linkedin.com/in/gudiseva-akhil-000825222/"
            />
            <TeamCard
                title="Ruchith Reddy"
                disc="HR Co-ordinator"
                image="https://i.ibb.co/CwbYkBQ/image.png"
                link="https://www.linkedin.com/in/ruchith-reddy-64ba6a22b/"
            />
            <TeamCard
                title="M S Shreya"
                disc="HR Co-ordinator"
                image="https://i.ibb.co/9wk11kN/image.png"
                link="https://www.linkedin.com/in/shreya-m-s-1a0425220/"
            />
		</div>
	</div>
</section>
