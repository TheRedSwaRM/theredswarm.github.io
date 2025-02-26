<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import old from '$lib/assets/old-logo.png';
    import employability from '$lib/assets/employability-predictor.png';
    import project_privacy from '$lib/assets/project_privacy.png';
</script>

<div class="flex flex-wrap content-center justify-center gap-4 my-4">
    <ProjectCard
        project_image="{employability}"
        project_title="Filipino Student Employability Predictor"
        project_description="A short quiz that uses AI to assess your employability."
        project_link="https://github.com/TheRedSwaRM/cs180-filipino-student-employability-predictor"
        project_link_desc="GitHub Repository"
    />
    <ProjectCard
        project_image="{project_privacy}"
        project_title="Project Privacy"
        project_description="A short 2D point-and-click thriller game used in conducting research on the relationship between video game immersion and perceptions on Data Privacy."
        project_link="https://theredswarm.itch.io/project-privacy"
        project_link_desc="Game Page"
    />
    <!-- TODO: add image -->
    <ProjectCard
        project_image="{old}"
        project_title="UP Computer Center: Super Ping Map"
        project_description="A content management system and campus network coverage visualizer developed during a workshop on software development hosted in the University Computer Center that"
        project_link=""
        project_link_desc=""
    />
    <!-- TODO: add image -->
    <ProjectCard
        project_image="{old}"
        project_title="IoMeter: Smart Energy Meter"
        project_description="Real-time household energy cosumption tracking and alerting in the form of an IoT embedded system."
        project_link="https://github.com/TheRedSwaRM/smart-meter-iot"
        project_link_desc="Github Repository"
    />
    <!-- TODO: add image -->
    <ProjectCard
        project_image="{old}"
        project_title="ACCESS GRANTED"
        project_description="A data science endeavor that explores the state of education access in the Philippines."
        project_link="https://github.com/ssencarnacion/CS132-Project-Philippines-in-a-Nutshell---Education"
        project_link_desc="Github Repository"
    />
    <!-- TODO: add image -->
    <ProjectCard
        project_image="{old}"
        project_title="Iwas Singko!"
        project_description="An Arcade-like Game Set in UP Diliman"
        project_link="https://github.com/TheRedSwaRM/IwasSingko"
        project_link_desc="Github Repository"
    />
</div>