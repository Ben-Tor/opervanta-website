<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';

	const requestItems = [
		'What software, website, app, portal, workflow, or system needs review',
		'What problem you are seeing or what outcome you want to improve',
		'Any important user flows, forms, dashboards, or business-critical steps',
		'Whether you need QA testing, software improvement, workflow automation, or a general review'
	];

	const fitItems = [
		'Software QA and manual testing',
		'Usability and workflow friction review',
		'Bug and issue documentation',
		'Business process and automation opportunity review'
	];
</script>

<svelte:head>
	<title>Contact | Opervanta</title>
	<meta
		name="description"
		content="Contact Opervanta to request a software review or discuss software quality, software improvement, and workflow automation needs."
	/>
</svelte:head>

<main>
	<section class="border-b border-slate-200/80 py-20">
		<Container>
			<p class="mb-4 text-lg font-semibold text-cyan-600">Contact</p>

			<h1 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
				Request a software review.
			</h1>

			<p class="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
				Use this page to prepare a request for software QA, software improvement, workflow
				automation, or a practical review of a digital system.
			</p>
		</Container>
	</section>

	<section class="border-b border-slate-200/80 py-20">
		<Container>
			<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
				<div>
					<p class="mb-4 text-lg font-semibold text-cyan-600">What to include</p>

					<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
						A clear request helps identify the right review scope.
					</h2>

					<p class="mt-5 text-lg leading-8 text-slate-700">
						The first step is understanding the system, the business problem, and the user flows
						that matter most.
					</p>
				</div>

				<div class="grid gap-3">
					{#each requestItems as item}
						<div class="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
							<p class="text-base font-semibold leading-6 text-slate-950">{item}</p>
						</div>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<section class="border-b border-slate-200/80 py-20">
		<Container>
			<div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
				<div>
					<p class="mb-4 text-lg font-semibold text-cyan-600">Service fit</p>

					<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
						Best fit for practical software and workflow problems.
					</h2>

					<p class="mt-5 text-lg leading-8 text-slate-700">
						Opervanta is focused on software quality, usability, workflow clarity, and
						automation opportunities. It is not positioned as a general creative design agency
						or full software development shop.
					</p>
				</div>

				<div class="grid gap-5 sm:grid-cols-2">
					{#each fitItems as item}
						<article class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
							<h3 class="text-base font-semibold text-slate-950">{item}</h3>
						</article>
					{/each}
				</div>
			</div>
		</Container>
	</section>

	<section class="py-20">
		<Container>
			<div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
				<div class="max-w-3xl">
					<p class="mb-4 text-lg font-semibold text-cyan-600">Next step</p>

					<h2 class="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]">
						Prepare a clear review request.
					</h2>

					<p class="mt-4 text-base leading-7 text-slate-700">
						Include the system or workflow you want reviewed, the issue you are seeing, and the
						business outcome you want to improve. A connected contact form will be added in a
						later implementation step.
					</p>
				</div>
			</div>
		</Container>
	</section>
</main>