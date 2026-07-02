<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	const principles = [
		{
			title: 'Practical software quality',
			description:
				'Opervanta focuses on real software issues, broken flows, usability problems, and the business impact of technical friction.'
		},
		{
			title: 'Clear documentation',
			description:
				'Findings should be written clearly so business owners, operators, and technical teams can understand what is wrong and what should happen next.'
		},
		{
			title: 'Workflow awareness',
			description:
				'Software is reviewed in context, including the process around it, the manual work it creates, and the decisions it supports.'
		},
		{
			title: 'Measured improvement',
			description:
				'The goal is not change for its own sake. The goal is better reliability, better usability, and better operational execution.'
		}
	];
</script>

<svelte:head>
	<title>About | Opervanta</title>
	<meta
		name="description"
		content="Learn about Opervanta, a Canadian technology company focused on software quality, software improvement, and workflow automation."
	/>
</svelte:head>

<main>
	<section class="border-b border-white/10 py-20">
		<Container>
			<p class="mb-4 text-sm font-medium text-cyan-300">About Opervanta</p>

			<h1 class="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
				A technology company built around better software execution.
			</h1>

			<p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
				Opervanta helps businesses review software, identify quality issues, improve digital
				workflows, and make clearer technology decisions.
			</p>
		</Container>
	</section>

	<section class="border-b border-white/10 py-24">
		<Container>
			<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
				<div>
					<p class="mb-4 text-sm font-medium text-cyan-300">What Opervanta does</p>

					<h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Software review with a business operations mindset.
					</h2>
				</div>

				<div class="space-y-5 text-base leading-8 text-slate-300">
					<p>
						Many software problems are not only technical problems. They show up as unclear
						user steps, repeated manual work, broken processes, missed details, slow execution,
						and poor visibility.
					</p>

					<p>
						Opervanta is focused on finding those issues, documenting them clearly, and helping
						businesses understand practical next steps.
					</p>

					<p>
						The work sits between software quality, usability review, workflow analysis, and
						automation planning.
					</p>
				</div>
			</div>
		</Container>
	</section>

	<section class="border-b border-white/10 py-24">
		<Container>
			<div class="max-w-3xl">
				<p class="mb-4 text-sm font-medium text-cyan-300">Operating principles</p>

				<h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
					Built for clear findings and practical improvement.
				</h2>
			</div>

			<div class="mt-12 grid gap-5 sm:grid-cols-2">
				{#each principles as principle}
					<article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
						<h3 class="text-lg font-semibold text-white">{principle.title}</h3>

						<p class="mt-4 text-sm leading-7 text-slate-400">
							{principle.description}
						</p>
					</article>
				{/each}
			</div>
		</Container>
	</section>

	<section class="py-24">
		<Container>
			<div class="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
				<div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div>
						<p class="mb-4 text-sm font-medium text-cyan-300">Next step</p>

						<h2 class="text-3xl font-semibold tracking-tight text-white">
							Review the service areas.
						</h2>

						<p class="mt-4 max-w-2xl text-base leading-7 text-slate-300">
							See how Opervanta approaches software QA, software improvement, and workflow
							automation.
						</p>
					</div>

					<div class="flex flex-col gap-3">
						<Button href="/services">View services</Button>
						<Button href="/contact" variant="secondary">Request review</Button>
					</div>
				</div>
			</div>
		</Container>
	</section>
</main>