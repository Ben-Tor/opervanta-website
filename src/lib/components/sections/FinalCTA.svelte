<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="border-t border-slate-200/80 py-20">
	<Container>
		<div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
			<p class="text-lg font-semibold text-cyan-600">Next step</p>

			<div class="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
				<div>
					<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
						Find the issues before your users do.
					</h2>

					<p class="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
						Request a software review to identify bugs, usability issues, broken flows, and
						improvement opportunities in your digital system.
					</p>
				</div>

				<div class="flex flex-col gap-4 sm:min-w-64">
					<Button href="/contact">Request a software review</Button>
					<Button href="/services" variant="secondary">Explore services</Button>
				</div>
			</div>
		</div>
	</Container>
</section>