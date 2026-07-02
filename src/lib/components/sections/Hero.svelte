<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';

	const capabilities = [
		'Manual software QA',
		'Usability review',
		'Workflow analysis',
		'Automation planning'
	];
</script>

<section class="relative overflow-hidden border-b border-slate-200/80 py-14 sm:py-16">
	<div class="absolute inset-0 -z-10">
		<div class="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl"></div>
		<div class="absolute right-0 top-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div>
	</div>

	<Container class="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
		<div>
			<p
				class="mb-5 inline-flex min-w-xl max-w-full rounded-full border border-cyan-200 bg-white/80 px-5 py-2.5 text-[15px] font-semibold text-slate-800 shadow-sm"
			>
				Software QA / Software improvement / Workflow automation
			</p>

			<h1 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
				Test, improve, and automate the digital systems your business depends on.
			</h1>

			<p class="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
				Opervanta helps businesses find software issues, improve usability, reduce technical
				friction, and create more reliable digital workflows.
			</p>

			<div class="mt-8 flex flex-col gap-4 sm:flex-row">
				<Button href="/contact">Request a software review</Button>
				<Button href="/services" variant="secondary">Explore services</Button>
			</div>
		</div>

		<div class="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-xl shadow-slate-200/80 backdrop-blur">
			<div class="rounded-2xl border border-slate-800 bg-slate-950 p-6">
				<p class="text-lg font-semibold text-cyan-300">Operational focus</p>

				<h2 class="mt-3 text-2xl font-semibold tracking-tight text-white">
					Practical software review before bigger technical decisions.
				</h2>

				<p class="mt-4 text-sm leading-6 text-slate-300">
					We look for broken flows, unclear user steps, avoidable manual work, and process gaps
					that slow down teams or customers.
				</p>

				<div class="mt-6 grid gap-3">
					{#each capabilities as capability (capability)}
						<div
							class="flex items-center justify-between rounded-2xl border border-white/10 bg-white/3 px-4 py-3"
						>
							<span class="text-sm font-medium text-slate-200">{capability}</span>
							<span class="h-2 w-2 rounded-full bg-cyan-300"></span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</Container>
</section>