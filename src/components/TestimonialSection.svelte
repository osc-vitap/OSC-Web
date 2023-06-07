<script>
	import { Card } from 'flowbite-svelte';
  import TestiMonialCard from './TestiMonialCard.svelte';
</script>

<div class="w-full max-w-screen-xl py-8 px-6 lg:px-8 ">
  <div class="flex items-center justify-center flex-col mt-10">
    <h1 class="text-center animate-text pb-5 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black">What people have to say 💬</h1>
    <p class="text-xs max-w-md text-center text-zinc-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque praesentium vero alias aliquam est quas harum reprehenderit quae natus dolor! Eum reiciendis ad autem repellat accusantium temporibus deleniti ipsum sunt?</p>
  </div>
	<div class="flex items-center justify-between my-5">
		<section>
			<Card padding="none" size="xl" class="grid md:grid-cols-2 lg:grid-cols-4 rounded-lg">
        <TestiMonialCard title="Solid foundation for any project" description="Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"/>
        <TestiMonialCard />
        <TestiMonialCard />
        <TestiMonialCard />
        <TestiMonialCard />
        <TestiMonialCard />
        <TestiMonialCard />
        <TestiMonialCard title="Solid foundation for any project" description="Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"/>
			</Card>
		</section>
	</div>
</div>
