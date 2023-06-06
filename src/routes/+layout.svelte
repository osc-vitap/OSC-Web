<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import { DarkMode } from 'flowbite-svelte';
</script>


<Navbar/>
<slot />
<Footer/>

