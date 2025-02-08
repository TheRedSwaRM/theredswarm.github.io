<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Hero from "./Hero.svelte";
  import Skills from "./Skills.svelte";
  import Projects from "./Projects.svelte";
  import Contact from "./Contact.svelte";
</script>

<div class="" id="navbar">
  <Navbar />
</div>

<!-- NOTE -->
<!-- 
- Responsive Design: site looks good on all devices.
- Consistent Branding: consistent color scheme and typography.
- Interactive Elements: animations or interactive elements. 
-->
<div class="">

  <div class="py-4" id="hero">
    <Hero />
  </div>

  <div class="py-4" id="languages_frameworks_technologies">
    <Skills />
  </div>

  <div class="py-4" id="projects">
    <Projects />
  </div>

  <!-- <div class="py-4" id="contact_info"> -->
    <!-- <Contact /> -->
  <!-- </div> -->

  <div class="py-4" id="footer">
    <!--  Footer
    Quick Links: Additional navigation links.
    Copyright Information: Basic copyright notice. -->
  </div>

</div>