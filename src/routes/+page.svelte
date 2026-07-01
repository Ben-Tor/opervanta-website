<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import CoreServices from '$lib/components/sections/CoreServices.svelte';
	import ProblemSection from '$lib/components/sections/ProblemSection.svelte';
	import ProcessSection from '$lib/components/sections/ProcessSection.svelte';
	import WhyOpervanta from '$lib/components/sections/WhyOpervanta.svelte';
	import FinalCTA from '$lib/components/sections/FinalCTA.svelte';
</script>

<svelte:head>
	<title>Opervanta | Software Quality and Automation</title>
	<meta
		name="description"
		content="Opervanta helps businesses test, improve, and automate digital systems."
	/>
</svelte:head>

<main>
	<Hero />
	<CoreServices />
	<ProblemSection />
	<ProcessSection />
	<WhyOpervanta />
	<FinalCTA />
</main>