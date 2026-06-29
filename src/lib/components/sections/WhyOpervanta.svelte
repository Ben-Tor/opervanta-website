<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import { advantages } from '$lib/data/advantages';
</script>

<section class="border-t border-white/10 py-24">
	<Container>
		<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
			<div>
				<p class="mb-4 text-sm font-medium text-cyan-300">Why Opervanta</p>

				<h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
					Technology work should connect directly to business outcomes.
				</h2>

				<p class="mt-5 text-lg leading-8 text-slate-300">
					Opervanta is built around practical software quality, clear reporting, workflow
					improvement, and long-term technology capability.
				</p>
			</div>

			<div class="grid gap-4 sm:grid-cols-2">
				{#each advantages as advantage}
					<article class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
						<h3 class="text-base font-semibold text-white">{advantage.title}</h3>

						<p class="mt-3 text-sm leading-7 text-slate-400">
							{advantage.description}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</Container>
</section>