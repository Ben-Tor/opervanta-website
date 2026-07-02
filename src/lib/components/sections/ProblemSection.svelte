<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import { businessProblems } from '$lib/data/problems';
</script>

<section class="border-t border-slate-200/80 py-20">
	<Container>
		<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
			<div>
				<p class="mb-4 text-lg font-semibold text-cyan-600">Business risk</p>

				<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
					Software problems are business problems.
				</h2>

				<p class="mt-5 text-lg leading-8 text-slate-700">
					Bugs, confusing workflows, and disconnected systems do not only create technical
					issues. They create lost time, missed opportunities, support costs, and weaker user
					trust.
				</p>
			</div>

			<div class="grid gap-4">
				{#each businessProblems as problem}
					<article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
						<h3 class="text-base font-semibold text-slate-950">{problem.title}</h3>

						<p class="mt-3 text-sm leading-7 text-slate-600">
							{problem.description}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</Container>
</section>