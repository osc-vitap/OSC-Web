<script>
  import { Card, Button, Badge, GradientButton } from "flowbite-svelte";
</script>

<section class="bg-transparent">
  <div
    class="text-5xl font-extrabold text-white py-12 lg:px-4 flex justify-left"
  >
    Events
  </div>
  <div class="items-center text-center flex justify-center">
    <ul class="text- flex items-center gap-6 text-sm">
      <li>
        <a href="/events/events-2023">
          <GradientButton outline color="purpleToBlue">2023</GradientButton>
        </a>
      </li>
      <li>
        <a href="/events/events-2022">
          <GradientButton outline color="purpleToBlue">2022</GradientButton>
        </a>
      </li>
      <li>
        <a href="/events/events-2021">
          <GradientButton outline color="purpleToBlue">2021</GradientButton>
        </a>
      </li>
      <li>
        <a href="/events/events-2020">
          <GradientButton outline color="purpleToBlue">2020</GradientButton>
        </a>
      </li>
      <li>
        <a href="/events/events-2019">
          <GradientButton outline color="purpleToBlue">2019</GradientButton>
        </a>
      </li>
      <li>
        <a href="/events/events-2018">
          <GradientButton outline color="purpleToBlue">2018</GradientButton>
        </a>
      </li>
    </ul>
  </div>
</section>
