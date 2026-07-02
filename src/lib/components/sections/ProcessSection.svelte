<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import { processSteps } from '$lib/data/process';
</script>

<section class="border-t border-slate-200/80 py-20">
	<Container>
		<div class="max-w-2xl">
			<p class="mb-4 text-lg font-semibold text-cyan-600">Process</p>

			<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
				A clear process for finding issues and improving execution.
			</h2>

			<p class="mt-5 text-lg leading-8 text-slate-700">
				Opervanta uses a structured approach to understand the system, test important flows,
				report issues clearly, and support practical improvement.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-4">
			{#each processSteps as step}
				<article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
					<p class="text-lg font-semibold text-cyan-600">{step.step}</p>

					<h3 class="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>

					<p class="mt-4 text-sm leading-7 text-slate-600">
						{step.description}
					</p>
				</article>
			{/each}
		</div>
	</Container>
</section>