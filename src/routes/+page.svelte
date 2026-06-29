<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<svelte:head>
	<title>Opervanta | Software Quality and Automation</title>
	<meta
		name="description"
		content="Opervanta helps businesses test, improve, and automate digital systems."
	/>
</svelte:head>

<main class="min-h-screen py-24">
	<Container>
		<section>
			<p
				class="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
			>
				Software QA • Software improvement • Workflow automation
			</p>

			<h1 class="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
				Test, improve, and automate the digital systems your business depends on.
			</h1>

			<p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
				Opervanta helps businesses find software issues, improve usability, reduce technical
				friction, and create more reliable digital workflows.
			</p>

			<div class="mt-10 flex flex-col gap-4 sm:flex-row">
				<Button href="/contact">Request a software review</Button>
				<Button href="/services" variant="secondary">Explore services</Button>
			</div>
		</section>
	</Container>
</main>