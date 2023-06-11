<script>
	import DiscordIcon from '../images/Discord_Icon.svelte';
	import { Card, Button, Toggle } from "flowbite-svelte";
  let vCard = false;
</script>

<div class="w-full max-w-screen-xl py-8 px-6 lg:px-8 sm:pt-24">
<div class="flex items-center justify-between">
	<section>
		<div class="mx-auto max-w-screen-xl py-16 lg:flex lg:items-center">
			<div class="max-w-xl ">
				<h1 class="text-2xl font-extrabold  text-white sm:text-4xl">
					Think Open, Think Free<br/>
					<strong class="font-extrabold text-purple-100 "> & make cool sh*t </strong>
				</h1>
	
				<p class="mt-4 text-xs sm:text-md/relaxed max-w-sm text-white">
					Open source community: Unleashing collaboration, innovation, and limitless possibilities, where code is shared, minds unite, and progress knows no bounds
				</p>
	
				<div>
								<a
					href="#_"
					class="mt-5 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
				>
					<span
						class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-teal-400 group-hover:opacity-100"
					/>
					<!-- Top glass gradient -->
					<span
						class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"
					/>
					<!-- Bottom gradient -->
					<span
						class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"
					/>
					<!-- Left gradient -->
					<span
						class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"
					/>
					<!-- Right gradient -->
					<span
						class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"
					/>
					<span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10" />
					<span
						class="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56 opacity-5"
					/>
					<span class="relative flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
							<path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
							<path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
						</svg>					
						<span class="ml-2 text-xs sm:text-md">Join our discord channel</span>
					</span>
				</a>
				</div>
			</div>
		</div>
	</section>
	
	<section class="hidden md:block">
		<div>
			<Card img="/images/image-1.webp" reverse={vCard}>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Upcoming Event</h5>
				<p class="mb-3 font-normal text-gray-500 dark:text-gray-400 leading-tight text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus autem quaerat tempora quos eum delectus perferendis, maiores repellat corporis nisi quibusdam veritatis cumque voluptatum nulla aspernatur necessitatibus vel voluptas!
				</p>
				<Button>
					Read more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
				</Button>
			</Card>
			<Toggle bind:checked={vCard} class="mt-4 italic dark:text-gray-500">Reverse</Toggle>
		</div>
	</section>
</div>
</div>
