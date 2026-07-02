<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import { deliverables, serviceDetails } from '$lib/data/services';
</script>

<svelte:head>
	<title>Services | Opervanta</title>
	<meta
		name="description"
		content="Software QA, software improvement, and workflow automation services from Opervanta."
	/>
</svelte:head>

<main>
	<section class="border-b border-white/10 py-20">
		<Container>
			<p class="mb-4 text-sm font-medium text-cyan-300">Services</p>

			<h1 class="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
				Software quality, improvement, and automation services.
			</h1>

			<p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
				Opervanta helps businesses test digital systems, identify software issues, improve
				usability, and reduce manual workflow friction.
			</p>

			<div class="mt-8 flex flex-col gap-4 sm:flex-row">
				<Button href="/contact">Request a software review</Button>
			</div>
		</Container>
	</section>

	<section id="services-overview" class="border-b border-white/10 py-24">
		<Container>
			<div class="max-w-3xl">
				<p class="mb-4 text-sm font-medium text-cyan-300">Service areas</p>

				<h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
					Focused technology services for better software execution.
				</h2>

				<p class="mt-5 text-lg leading-8 text-slate-300">
					The work starts with understanding the system, testing important flows, documenting
					issues clearly, and identifying practical improvement opportunities.
				</p>
			</div>

			<div class="mt-12 grid gap-6">
				{#each serviceDetails as service}
					<article class="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
						<div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
							<div>
								<h3 class="text-2xl font-semibold tracking-tight text-white">{service.title}</h3>

								<p class="mt-4 text-base leading-7 text-slate-300">
									{service.summary}
								</p>
							</div>

							<div class="grid gap-3 sm:grid-cols-2">
								{#each service.points as point}
									<div class="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">
										<p class="text-sm font-medium text-slate-200">{point}</p>
									</div>
								{/each}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</Container>
	</section>

	<section class="border-b border-white/10 py-24">
		<Container>
			<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
				<div>
					<p class="mb-4 text-sm font-medium text-cyan-300">What clients receive</p>

					<h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Clear findings that support better decisions.
					</h2>

					<p class="mt-5 text-lg leading-8 text-slate-300">
						The goal is not only to find problems. The goal is to explain what is wrong, why it
						matters, and what should happen next.
					</p>
				</div>

				<div class="grid gap-3">
					{#each deliverables as deliverable}
						<div class="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
							<p class="text-sm font-semibold text-white">{deliverable}</p>
						</div>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<section class="py-24">
		<Container>
			<div class="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
				<div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div>
						<p class="mb-4 text-sm font-medium text-cyan-300">Next step</p>

						<h2 class="text-3xl font-semibold tracking-tight text-white">
							Start with a practical software review.
						</h2>

						<p class="mt-4 max-w-2xl text-base leading-7 text-slate-300">
							Use Opervanta to identify software issues, unclear workflows, usability friction,
							and improvement opportunities before they become larger business problems.
						</p>
					</div>

					<div class="flex flex-col gap-3">
						<Button href="/contact">Request a software review</Button>
						<Button href="/about" variant="secondary">About Opervanta</Button>
					</div>
				</div>
			</div>
		</Container>
	</section>
</main>