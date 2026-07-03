<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { navigationLinks } from '$lib/data/navigation';

	const normalizePath = (path: string) => {
		const normalized = path.replace(/\/$/, '');

		return normalized || '/';
	};

	const isActive = (href: string) => {
		return normalizePath(page.url.pathname) === normalizePath(href);
	};
</script>

<header class="sticky top-0 z-50 border-b border-slate-800 bg-black">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href={resolve('/')} class="flex items-center gap-3" aria-label="Opervanta home">
			<span
				class="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-sm font-bold text-slate-950"
			>
				O
			</span>

			<span class="text-sm font-semibold tracking-wide text-white">Opervanta</span>
		</a>

		<nav class="hidden items-center gap-8 text-sm font-medium md:flex">
			{#each navigationLinks as link (link.href)}
				<a
					href={resolve(link.href)}
					class="transition hover:opacity-80"
					style:color={isActive(link.href) ? '#67e8f9' : '#ffffff'}
					aria-current={isActive(link.href) ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		{#if normalizePath(page.url.pathname) !== '/contact'}
			<a
				href={resolve('/contact')}
				class="hidden rounded-full border border-white bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:border-white hover:bg-cyan-400 hover:text-slate-950 md:inline-flex"
			>
				Request review
			</a>
		{/if}
	</div>
</header>