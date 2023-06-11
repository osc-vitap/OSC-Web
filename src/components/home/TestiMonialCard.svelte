<script>
	export let title = 'Sample Title';
	export let description = "lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."
	export let image = 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png';
	export let url = 'https://www.google.com';
	export let name = 'Sample Name';
	export let job = 'Sample Job';
</script>

<div class="mb-8 sm:break-inside-avoid">
	<blockquote class="rounded-xl bg-gray-50 p-6 shadow">
		<h1 class="font-semibold">{title}</h1>
		<p class="leading-relaxed text-gray-700">
			{description}
		</p>
	</blockquote>

	<a href={url} class="mt-4 flex items-center gap-4">
		<img alt={name + "'s pfp"} src={image} class="h-12 w-12 rounded-full object-cover" />

		<div class="text-sm">
			<p class="font-medium">{name}</p>
			<p class="mt-1">{job}</p>
		</div>
	</a>
</div>
