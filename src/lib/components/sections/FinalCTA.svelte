<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
</script>

<section class="border-t border-white/10 py-24">
	<Container>
		<div class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:p-12">
			<blockquote class="max-w-3xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
				“Better software is not only built. It is tested, reviewed, improved, and trusted.”
			</blockquote>

			<div class="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
				<div>
					<p class="mb-4 text-sm font-medium text-cyan-300">Next step</p>

					<h2 class="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Find the issues before your users do.
					</h2>

					<p class="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
						Request a software review to identify bugs, usability issues, broken flows, and
						improvement opportunities in your digital system.
					</p>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row lg:flex-col">
					<Button href="/contact">Request a software review</Button>
					<Button href="/services" variant="secondary">Explore services</Button>
				</div>
			</div>
		</div>
	</Container>
</section>