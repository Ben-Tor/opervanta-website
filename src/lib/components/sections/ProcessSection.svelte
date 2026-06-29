<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import { processSteps } from '$lib/data/process';
</script>

<section class="border-t border-white/10 py-24">
	<Container>
		<div class="max-w-2xl">
			<p class="mb-4 text-sm font-medium text-cyan-300">Process</p>

			<h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
				A clear process for finding issues and improving execution.
			</h2>

			<p class="mt-5 text-lg leading-8 text-slate-300">
				Opervanta uses a structured approach to understand the system, test important flows,
				report issues clearly, and support practical improvement.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-4">
			{#each processSteps as step}
				<article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
					<p class="text-sm font-semibold text-cyan-300">{step.step}</p>

					<h3 class="mt-5 text-lg font-semibold text-white">{step.title}</h3>

					<p class="mt-4 text-sm leading-7 text-slate-400">
						{step.description}
					</p>
				</article>
			{/each}
		</div>
	</Container>
</section>