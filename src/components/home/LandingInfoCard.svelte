<script>
	export let title = 'Sample Title';
	export let description = 'lorem ipsum dolor sit amet consecteur.';
	export let url = '#';
</script>

<!-- REFER: https://stackoverflow.com/questions/66069647/best-way-to-import-svg-icons-into-a-svelte-app -->

<a
	class="bg-white block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
	href={url}
>
	<span class="inline-block rounded-lg bg-gray-50 p-3">
		<!-- SVG WILL GO HERE -->
	</span>

	<h2 class="mt-2 font-bold">{title}</h2>

	<p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
		{description}
	</p>
</a>
