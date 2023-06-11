<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

<section>
	<div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
			<div class="lg:col-span-2 lg:py-12">
				<h1 class="text-2xl font-extrabold  text-white sm:text-4xl">
					Contact Us.
				</h1>
				<p class="max-w-xl text-xs mt-0 sm:mt-2 text-white sm:text-sm">
					At the same time, the fact that we are wholly owned and totally independent from
					manufacturer and other group control gives you confidence that we will only recommend what
					is right for you.
				</p>

				<div class="mt-8">
					<a href="" class="text-2xl font-bold text-white">+91 0151 475 4450 </a>

					<address class="mt-2 not-italic text-white sm:text-zinc-600">282 Kevin Brook, Imogeneborough, CA 58517</address>
				</div>
			</div>

			<div class="rounded-lg bg-white p-4 shadow-lg lg:col-span-3 lg:p-6">
				<form action="" class="space-y-4">
					<div>
						<label class="sr-only" for="name">Name</label>
						<input
							class="w-full rounded-lg border-gray-200 p-3 text-sm"
							placeholder="Name"
							type="text"
							id="name"
						/>
					</div>

					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<label class="sr-only" for="email">Email</label>
							<input
								class="w-full rounded-lg border-gray-200 p-3 text-sm"
								placeholder="Email address"
								type="email"
								id="email"
							/>
						</div>

						<div>
							<label class="sr-only" for="phone">Phone</label>
							<input
								class="w-full rounded-lg border-gray-200 p-3 text-sm"
								placeholder="Phone Number"
								type="tel"
								id="phone"
							/>
						</div>
					</div>



					<div>
						<label class="sr-only" for="message">Message</label>

						<textarea
							class="w-full rounded-lg border-gray-200 p-3 text-sm"
							placeholder="Message"
							rows="5"
							id="message"
						/>
					</div>

					<div class="mt-4">
						<button
							type="submit"
							class="inline-block w-full text-sm rounded-lg bg-purple-600 hover:bg-purple-900 px-2 py-2 font-medium text-white sm:w-auto"
						>
<div class="flex items-center justify-center">						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
	<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
</svg>
<span class="ml-2">Send Message</span></div>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
