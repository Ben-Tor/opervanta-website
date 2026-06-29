<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import { businessProblems } from '$lib/data/problems';
</script>

<section class="border-t border-white/10 py-24">
	<Container>
		<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
			<div>
				<p class="mb-4 text-sm font-medium text-cyan-300">Business risk</p>

				<h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
					Software problems are business problems.
				</h2>

				<p class="mt-5 text-lg leading-8 text-slate-300">
					Bugs, confusing workflows, and disconnected systems do not only create technical
					issues. They create lost time, missed opportunities, support costs, and weaker user
					trust.
				</p>
			</div>

			<div class="grid gap-4">
				{#each businessProblems as problem}
					<article class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
						<h3 class="text-base font-semibold text-white">{problem.title}</h3>

						<p class="mt-3 text-sm leading-7 text-slate-400">
							{problem.description}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</Container>
</section>