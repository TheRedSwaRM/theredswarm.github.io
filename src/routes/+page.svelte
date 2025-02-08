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
  <div class="py-4" id="header">
    <!-- insert navbar here -->

    <!--  Header
    Name and Title: Clearly state your name and your role (e.g., “John Doe - Software Developer” or “Jane Smith - Game Developer”).
    Navigation Menu: Links to other sections of your site like About, Projects, Blog, and Contact. -->

    <Hero />
  </div>

  <!-- Hero Section
  Introduction: A brief introduction or tagline that summarizes who you are and what you do.
  Call to Action: A button that encourages visitors to view your work or contact you. -->

  <div class="py-4" id="languages_frameworks_technologies">
    <Skills />
  </div>

  <div class="py-4" id="projects">
    <!-- insert here the projects I've made as well as a 3D interactable car that lets me travel through the various projects I've made starting from the most recent -->
    <!-- Featured Projects
    Project Thumbnails: Images or screenshots of your top projects.
    Project Descriptions: Brief descriptions of each project, including your role, technologies used, and any notable achievements. -->
    <Projects />
  </div>

  <div class="py-4" id="contact_info">
    <!-- insert contact info, FB page, linkedin, etc. -->
    <!-- Contact Form: A simple form for visitors to get in touch with you.
    Social Media Links: Icons linking to your professional social media profiles (e.g., LinkedIn, GitHub, Twitter). -->
    <Contact />
  </div>

  <div class="py-4" id="footer">
    <!--  Footer
    Quick Links: Additional navigation links.
    Copyright Information: Basic copyright notice. -->
  </div>

<!-- <style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style> -->
</div>