<script>
	import { Card } from 'flowbite-svelte';
	import TestiMonialCard from './TestiMonialCard.svelte';
</script>

<div class="w-full max-w-screen-xl py-8 px-6 lg:px-8">
	<div class="flex items-center justify-center flex-col mt-10">
		<h1
			class="text-center animate-text pb-5 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black"
		>
			What people have to say 💬
		</h1>
		<p class="text-xs sm:text-sm max-w-md text-center text-zinc-500 mb-4">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque praesentium vero alias aliquam est
			quas harum reprehenderit.
		</p>
	</div>
	<div class="flex items-center justify-between my-5">
		<section>
      <div class="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
        <!-- 6 FOR PROPER ALLIGNMENT -->
        <TestiMonialCard />
        <TestiMonialCard />
        <TestiMonialCard />
        <TestiMonialCard />
        <TestiMonialCard />
        <TestiMonialCard />
        
		</section>
	</div>
</div>
