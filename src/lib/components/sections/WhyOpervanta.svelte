<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import { advantages } from '$lib/data/advantages';
</script>

<section class="border-t border-slate-200/80 py-20">
	<Container>
		<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
			<div>
				<p class="mb-4 text-lg font-semibold text-cyan-600">Why Opervanta</p>

				<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
					Technology work should connect directly to business outcomes.
				</h2>

				<p class="mt-5 text-lg leading-8 text-slate-700">
					Opervanta is built around practical software quality, clear reporting, workflow
					improvement, and long-term technology capability.
				</p>
			</div>

			<div class="grid gap-4 sm:grid-cols-2">
				{#each advantages as advantage}
					<article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
						<h3 class="text-base font-semibold text-slate-950">{advantage.title}</h3>

						<p class="mt-3 text-sm leading-7 text-slate-600">
							{advantage.description}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</Container>
</section>