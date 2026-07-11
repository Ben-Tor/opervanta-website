<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Container from '$lib/components/ui/Container.svelte';

	const isNotFound = () => page.status === 404;
</script>

<svelte:head>
	<title>{isNotFound() ? 'Page Not Found' : 'Something Went Wrong'} | Opervanta</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main>
	<section class="flex min-h-[65vh] items-center border-b border-slate-200/80 py-20">
		<Container>
			<div class="max-w-3xl">
				<p class="mb-4 text-lg font-semibold text-cyan-600">
					Error {page.status}
				</p>

				<h1
					class="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl xl:text-[42px]"
				>
					{isNotFound() ? 'Page not found.' : 'Something went wrong.'}
				</h1>

				<p class="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
					{isNotFound()
						? 'The page you requested may have been moved, renamed, or does not exist.'
						: 'The requested page could not be loaded. Return to the homepage or contact Opervanta for assistance.'}
				</p>

				<div class="mt-8 flex flex-col gap-4 sm:flex-row">
					<a
						href={resolve('/')}
						class="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
					>
						Return home
					</a>

					<a
						href={resolve('/contact')}
						class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-cyan-400 hover:bg-cyan-50"
					>
						Contact Opervanta
					</a>
				</div>
			</div>
		</Container>
	</section>
</main>