<script>
    import Logo from '../routes/Logo.svelte'
    // Languages
    import c from '$lib/icons/c.svg';
    import python from '$lib/icons/python.svg';
    import js from '$lib/icons/js.svg';
    import ts from '$lib/icons/ts.svg';
    import ruby from '$lib/icons/ruby.svg';
    import html from '$lib/icons/html.svg';
    import css from '$lib/icons/css.svg';

    // Libraries & Frameworks
    import django from '$lib/icons/django.svg';
    import react from '$lib/icons/react.svg';
    import nextjs from '$lib/icons/nextjs.svg';
    import svelte from '$lib/icons/svelte.svg';
    import rubyrails from '$lib/icons/rubyrails.svg';
    import tailwindcss from '$lib/icons/tailwindcss.svg';
    import flask from '$lib/icons/flask.svg';
    import sqlalchemy from '$lib/icons/sqlalchemy.svg';

    // Tools and Technologies
    import vsc from '$lib/icons/vsc.svg';
    import git from '$lib/icons/git.svg';
    import docker from '$lib/icons/docker.svg';
    import nodejs from '$lib/icons/nodejs.svg';
    import vercel from '$lib/icons/vercel.svg';
    import postgresql from '$lib/icons/postgresql.svg';
    import mysql from '$lib/icons/mysql.svg';
    import mssql from '$lib/icons/mssql.svg';
    import jenkins from '$lib/icons/jenkins.svg';
    import phabricator from '$lib/icons/phabricator.svg';
    import kibana from '$lib/icons/kibana.svg';
    import godot from '$lib/icons/godot.svg';
    import illustrator from '$lib/icons/illustrator.svg';
    import photoshop from '$lib/icons/photoshop.svg';
    import canva from '$lib/icons/canva.svg';
    import figma from '$lib/icons/figma.svg';

</script>

<article class="flex flex-row flex-wrap content-center justify-center text-center gap-4">
    <section class="flex-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow p-2">
        <h1 class="my-4 font-bold text-xl">Programming Languages</h1>
        <Logo src={c} name="C" />
        <Logo src={python} name="Python" />
        <Logo src={js} name="JavaScript" />
        <Logo src={ts} name="TypeScript" />
        <Logo src={ruby} name="Ruby" />
        <Logo src={html} name="HTML" />
        <Logo src={css} name="CSS" />
    </section>
    <section class="flex-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow p-2">
        <h1 class="my-4 font-bold text-xl">Libraries & Frameworks</h1>
        <Logo src={django} name="Django" />
        <Logo src={react} name="React" />
        <Logo src={nextjs} name="Next.js" />
        <Logo src={svelte} name="Svelte" />
        <Logo src={rubyrails} name="Ruby on Rails"/>
        <Logo src={tailwindcss} name="TailwindCSS"/>
        <Logo src={flask} name="Flask"/>
        <Logo src={sqlalchemy} name="SQLAlchemy"/>
    </section>
    <section class="flex-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow p-2">
        <h1 class="my-4 font-bold text-xl">Tools and Technologies</h1>
        <Logo src={vsc} name="Visual Studio Code" />
        <Logo src={git} name="Git" />
        <Logo src={docker} name="Docker" />
        <Logo src={nodejs} name="Node.js" />
        <Logo src={vercel} name="Vercel" />
        <Logo src={postgresql} name="PostgreSQL" />
        <Logo src={mysql} name="MySQL" />
        <Logo src={mssql} name="MsSQL" />
        <Logo src={jenkins} name="Jenkins" />
        <Logo src={phabricator} name="Phabricator" />
        <Logo src={kibana} name="Kibana" />
        <Logo src={godot} name="Godot" />
        <Logo src={canva} name="Canva" />
        <Logo src={figma} name="Figma" />
    </section>
</article>