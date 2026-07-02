<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import { coreServices } from '$lib/data/services';
</script>

<section class="border-t border-slate-200/80 py-20">
	<Container>
		<div class="max-w-2xl">
			<p class="mb-4 text-lg font-semibold text-cyan-600">Core services</p>

			<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
				Practical technology services for better software execution.
			</h2>

			<p class="mt-5 text-lg leading-8 text-slate-700">
				Opervanta starts with focused services that help businesses identify software issues,
				improve digital systems, and reduce manual workflow friction.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each coreServices as service}
				<article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
					<h3 class="text-lg font-semibold text-slate-950">{service.title}</h3>

					<p class="mt-4 text-sm leading-7 text-slate-600">
						{service.description}
					</p>
				</article>
			{/each}
		</div>
	</Container>
</section>