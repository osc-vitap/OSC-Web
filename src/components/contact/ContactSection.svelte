<script>
  import { GradientButton } from "flowbite-svelte";
  import { fade, slide } from "svelte/transition";
  let isHovered = false;
</script>

<section>
  <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <h1 class="text-2xl font-extrabold text-white sm:text-4xl">
          Contact Us.
        </h1>
        <p class="max-w-xl text-xs mt-0 sm:mt-2 text-white sm:text-sm">
          Have something to discuss or a brilliant idea to share? Feel free to
          contact us! Our virtual doors are always open, waiting to hear your
          thoughts. Drop us a line, and let's make things happen together
        </p>

        <div class="mt-8">
          <a
            href="https://discord.com/invite/DXgfsxXv6c"
            class="text-2xl font-bold text-white"
            rel="noreferrer"
            target="_blank"
            >Wanna Join Us?
          </a>
          <address class="mt-2 not-italic text-white sm:text-purple-400">
            Open Source Community, VIT-AP University
          </address>
        </div>
      </div>

      <div
        in:slide
        class="rounded-lg bg-white p-4 shadow-lg lg:col-span-3 lg:p-6 card"
        on:mouseenter={() => (isHovered = true)}
        on:mouseleave={() => (isHovered = false)}
      >
        <form action="" class="space-y-4">
          <h3 class="text-1xl font-bold text-zinc-700 sm:text-2xl">
            Want to tell us Something?
          </h3>
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-300 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    /><path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    /></svg
                  >
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@mail.com"
                />
              </div>
            </div>

            <div>
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    ><path
                      fill="#6b7280"
                      d="M19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3Z"
                    /></svg
                  >
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
              class="w-full rounded-lg border-gray-300 p-3 text-sm"
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
              <div class="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
                  />
                </svg>
                <span class="ml-2">Send Message</span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<style>
  .card {
    transition: transform 0.3s;
  }

  .card:hover {
    transform: scale(1.02);
  }
</style>
