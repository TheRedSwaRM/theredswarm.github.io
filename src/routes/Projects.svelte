<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import old from '$lib/assets/old-logo.png';
    import employability from '$lib/assets/employability-predictor.png';
    import project_privacy from '$lib/assets/project-privacy.png';
    import super_ping_map from '$lib/assets/super-ping-map.png';
    import iometer from '$lib/assets/iometer.png';
    import access_granted from '$lib/assets/access-granted.png';
    import iwas_singko from '$lib/assets/iwas-singko.png';
</script>

<div class="flex flex-wrap justify-center gap-4 my-4">
    <ProjectCard
        project_image="{employability}"
        project_title="Filipino Student Employability Predictor"
        project_description="A short quiz that uses AI to assess your employability."
        project_link="https://github.com/TheRedSwaRM/cs180-filipino-student-employability-predictor"
    />
    <ProjectCard
        project_image="{project_privacy}"
        project_title="Project Privacy"
        project_description="A short 2D point-and-click thriller game used in conducting research on the relationship between video game immersion and perceptions on Data Privacy."
        project_link="https://theredswarm.itch.io/project-privacy"
    />
    <ProjectCard
        project_image="{super_ping_map}"
        project_title="UP Computer Center: Super Ping Map"
        project_description="A content management system and campus network coverage visualizer developed during a workshop on software development hosted in the University Computer Center that"
        project_link=""
    />
    <ProjectCard
        project_image="{iometer}"
        project_title="IoMeter: Smart Energy Meter"
        project_description="Real-time household energy cosumption tracking and alerting in the form of an IoT embedded system."
        project_link="https://github.com/TheRedSwaRM/smart-meter-iot"
    />
    <ProjectCard
        project_image="{access_granted}"
        project_title="ACCESS GRANTED"
        project_description="A data science endeavor that explores the state of education access in the Philippines."
        project_link="https://github.com/ssencarnacion/CS132-Project-Philippines-in-a-Nutshell---Education"
    />
    <ProjectCard
        project_image="{iwas_singko}"
        project_title="Iwas Singko!"
        project_description="An Arcade-like Game Set in UP Diliman"
        project_link="https://github.com/TheRedSwaRM/IwasSingko"
    />
</div>