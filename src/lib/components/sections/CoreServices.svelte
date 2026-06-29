<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import { coreServices } from '$lib/data/services';
</script>

<section class="border-t border-white/10 py-24">
	<Container>
		<div class="max-w-2xl">
			<p class="mb-4 text-sm font-medium text-cyan-300">Core services</p>

			<h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
				Practical technology services for better software execution.
			</h2>

			<p class="mt-5 text-lg leading-8 text-slate-300">
				Opervanta starts with focused services that help businesses identify software issues,
				improve digital systems, and reduce manual workflow friction.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each coreServices as service}
				<article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
					<h3 class="text-lg font-semibold text-white">{service.title}</h3>

					<p class="mt-4 text-sm leading-7 text-slate-400">
						{service.description}
					</p>
				</article>
			{/each}
		</div>
	</Container>
</section>