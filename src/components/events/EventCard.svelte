<script>
	import {fly,slide} from 'svelte/transition';
	export let url = '#';
	export let image = 'https://www.oscvitap.org/static/media/4.f0c6291e2c00644ded8f.jpg';
	export let title = 'Sample Title For Event';
	export let sub_title = 'Sample Subtitle';
  	export let venue = 'Venue';
	export let date = 'Date';
  	export let attendance = '200+';
  	
</script>

<a in:fly href={url} class="p-2 bg-white block rounded-lg bg-opacity-90 drop-shadow-sm hover:drop-shadow-md border border-zinc-200">
	<img alt={title} src={image} class="h-40 w-full rounded-md object-cover" />

	<div class="mt-2">
		<dl>
			<div>
				<dt class="sr-only">Event sub title</dt>

				<dd class="text-sm text-zinc-500">{sub_title}</dd>
			</div>

			<div>
				<dt class="sr-only">Event title</dt>

				<dd class="font-semibold text-zinc-800">{title}</dd>
			</div>
		</dl>

		<div class="mt-6 flex items-center gap-8 text-xs">
			<div class="inline-flex shrink-0 items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-4 h-4">
          <path fill-rule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clip-rule="evenodd" />
        </svg>
        

				<div class="mt-1.5 sm:mt-0">
					<p class="text-zinc-500">Venue</p>

					<p class="font-medium">{venue}</p>
				</div>
			</div>

			<div class="inline-flex shrink-0 items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-4 h-4">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
        </svg>
        

				<div class="mt-1.5 sm:mt-0">
					<p class="text-zinc-500">Date</p>

					<p class="font-medium">{date}</p>
				</div>
			</div>

			<div class="inline-flex shrink-0 items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-4 h-4">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>

        
				<div class="mt-1.5 sm:mt-0">
					<p class="text-zinc-500">Attendance</p>

					<p class="font-medium text-zinc-700">{attendance}</p>
				</div>
			</div>
		</div>
	</div>
</a>
