<script>
  export let title = "Sample Title"
  export let description = "Sample Description"
  export let image = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
  export let url = "https://www.google.com"
  export let name = "Sample Name"
  export let job = "Sample Job"
</script>

<figure
class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700"
>
<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
  <h3 class="text-md font-semibold text-gray-900 dark:text-white">
    {title}
  </h3>
  <p class="my-4 font-light text-sm">
    {description}
  </p>
</blockquote>
<figcaption class="flex justify-center items-center space-x-3">
  <img
    class="w-9 h-9 rounded-full"
    src={image}
    alt={name}
  />
  <div class="space-y-0.5 font-medium dark:text-white text-left">
    <div>{name}</div>
    <div class="text-sm font-light text-gray-500 dark:text-gray-400">
      {job}
    </div>
  </div>
</figcaption>
</figure>