<script>
	import OscFullLogoWhite from '../images/OSC_Full_Logo_White.svelte';

</script>

<header
	aria-label="Site Header"
	class="w-full bg-zinc-800 backdrop-filter backdrop-blur-lg bg-opacity-30 fixed border-b-2 border-zinc-900 border-opacity-10 z-20"
>
	<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- LOGO BRANDING -->
			<div class="">
				<a class="block" href="/">
					<span class="sr-only">Home</span>
					<OscFullLogoWhite height="35"/>
				</a>
			</div>

			<!-- NAVIGATION BUTTONS -->
			<div class="md:flex md:items-center md:gap-12">
				<nav aria-label="Site Nav" class="hidden md:block">
					<ul class="flex items-center gap-6 text-sm">
						<li>
							<a class="text-gray-200 transition hover:text-gray-300/75" href="/"> About </a>
						</li>

						<li>
							<a class="text-gray-200 transition hover:text-gray-300/75" href="/teams"> Team </a>
						</li>

						<li>
							<a class="text-gray-200 transition hover:text-gray-300/75" href="/events"> Events </a>
						</li>

						<li>
							<a class="text-gray-200 transition hover:text-gray-300/75" href="/contact"> Contact </a>
						</li>

					</ul>
				</nav>

				<!-- OSC Platforms Button -->
				<div class="flex items-center gap-4 ">
					<div class="flex">
						<a
							href="#_"
							class="hidden xs:block mr-4 md:mr-0 rounded px-5 py-1 overflow-hidden group border-2 border-white border-opacity-20 relative hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-700 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
						>
							<span
								class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"
							/>
							<span class="flex items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="w-6 h-6"
								>
									<path
										d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"
									/>
								</svg>

								<span class="ml-2 text-sm">OSC Platforms</span>
							</span>
						</a>

						<!-- Hamburger Menu  -->
						<div class="block md:hidden">
							<button class="rounded p-2 text-white transition hover:text-gray-300/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
