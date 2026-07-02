<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import { deliverables, serviceDetails } from '$lib/data/services';
</script>

<svelte:head>
	<title>Services | Opervanta</title>
	<meta
		name="description"
		content="Software QA, usability review, workflow improvement, and automation planning services from Opervanta."
	/>
</svelte:head>

<main>
	<section class="border-b border-slate-200/80 py-20">
		<Container>
			<p class="mb-4 text-lg font-semibold text-cyan-600">Services</p>

			<h1 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
				Software QA, workflow review, and practical improvement services.
			</h1>

			<p class="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
				Opervanta helps businesses review digital systems, identify software issues, improve
				usability, and reduce manual workflow friction.
			</p>

			<div class="mt-8 flex flex-col gap-4 sm:flex-row">
				<Button href="/contact">Request a software review</Button>
			</div>
		</Container>
	</section>

	<section id="services-overview" class="border-b border-slate-200/80 py-20">
		<Container>
			<div class="max-w-3xl">
				<p class="mb-4 text-lg font-semibold text-cyan-600">Service areas</p>

				<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
					Focused services for better software execution.
				</h2>

				<p class="mt-5 text-lg leading-8 text-slate-700">
					The work starts with understanding the system, reviewing important user flows,
					documenting issues clearly, and identifying practical next steps.
				</p>
			</div>

			<div class="mt-12 grid gap-6">
				{#each serviceDetails as service (service.title)}
					<article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
						<div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
							<div>
								<h3 class="text-2xl font-semibold tracking-tight text-slate-950">
									{service.title}
								</h3>

								<p class="mt-4 text-base leading-7 text-slate-700">
									{service.summary}
								</p>
							</div>

							<div class="grid gap-3 sm:grid-cols-2">
								{#each service.points as point (point)}
									<div class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
										<p class="text-sm font-medium text-slate-700">{point}</p>
									</div>
								{/each}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</Container>
	</section>

	<section class="border-b border-slate-200/80 py-20">
		<Container>
			<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
				<div>
					<p class="mb-4 text-lg font-semibold text-cyan-600">What clients receive</p>

					<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
						Clear findings that support better decisions.
					</h2>

					<p class="mt-5 text-lg leading-8 text-slate-700">
						The goal is to explain what is wrong, why it matters, and what should happen
						next. Findings should be useful for both business and technical decisions.
					</p>
				</div>

				<div class="grid gap-3">
					{#each deliverables as deliverable (deliverable)}
						<div class="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
							<p class="text-base font-semibold text-slate-950">{deliverable}</p>
						</div>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<section class="py-20">
		<Container>
			<div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
				<div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
					<div>
						<p class="mb-4 text-lg font-semibold text-cyan-600">Next step</p>

						<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
							Start with a practical software review.
						</h2>

						<p class="mt-4 max-w-2xl text-base leading-7 text-slate-700">
							Share the software, workflow, or release concern you want reviewed. Opervanta
							can help identify issues, clarify risk, and outline practical improvement
							opportunities.
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