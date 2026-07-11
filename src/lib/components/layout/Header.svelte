<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { navigationLinks } from '$lib/data/navigation';

	let mobileMenuOpen = $state(false);
	let menuButton: HTMLButtonElement | undefined;

	const normalizePath = (path: string) => {
		const normalized = path.replace(/\/$/, '');

		return normalized || '/';
	};

	const isActive = (href: string) => {
		return normalizePath(page.url.pathname) === normalizePath(href);
	};

	const isContactPage = () => {
		return normalizePath(page.url.pathname) === '/contact';
	};

	const closeMobileMenu = () => {
	mobileMenuOpen = false;
};

const closeMobileMenuAndReturnFocus = () => {
	mobileMenuOpen = false;
	menuButton?.focus();
};

const handleWindowKeydown = (event: KeyboardEvent) => {
	if (event.key === 'Escape' && mobileMenuOpen) {
		closeMobileMenuAndReturnFocus();
	}
};

const handleWindowResize = () => {
	if (window.innerWidth >= 768 && mobileMenuOpen) {
		closeMobileMenu();
	}
};
</script>

<svelte:window onkeydown={handleWindowKeydown} onresize={handleWindowResize} />

<header class="sticky top-0 z-50 border-b border-slate-800 bg-black">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a
			href={resolve('/')}
			class="flex items-center gap-3"
			aria-label="Opervanta home"
			onclick={closeMobileMenu}
		>
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

		{#if !isContactPage()}
			<a
				href={resolve('/contact')}
				class="hidden rounded-full border border-white bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:border-white hover:bg-cyan-400 hover:text-slate-950 md:inline-flex"
			>
				Request review
			</a>
		{/if}

		<button
			type="button"
			bind:this={menuButton}
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-white transition hover:border-slate-500 hover:bg-slate-900 md:hidden"
			aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			aria-expanded={mobileMenuOpen}
			aria-controls="mobile-navigation"
			onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
		>
			{#if mobileMenuOpen}
				<svg
					viewBox="0 0 24 24"
					class="h-5 w-5"
					aria-hidden="true"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				>
					<path d="M6 6l12 12"></path>
					<path d="M18 6L6 18"></path>
				</svg>
			{:else}
				<svg
					viewBox="0 0 24 24"
					class="h-5 w-5"
					aria-hidden="true"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				>
					<path d="M4 7h16"></path>
					<path d="M4 12h16"></path>
					<path d="M4 17h16"></path>
				</svg>
			{/if}
		</button>
	</div>

	{#if mobileMenuOpen}
		<div id="mobile-navigation" class="border-t border-slate-800 bg-black md:hidden">
			<nav class="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile navigation">
				{#each navigationLinks as link (link.href)}
					<a
						href={resolve(link.href)}
						class="rounded-lg px-3 py-3 text-sm font-medium transition hover:bg-slate-900"
						style:color={isActive(link.href) ? '#67e8f9' : '#ffffff'}
						aria-current={isActive(link.href) ? 'page' : undefined}
						onclick={closeMobileMenu}
					>
						{link.label}
					</a>
				{/each}

				{#if !isContactPage()}
					<a
						href={resolve('/contact')}
						class="mt-3 inline-flex justify-center rounded-full border border-white bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
						onclick={closeMobileMenu}
					>
						Request review
					</a>
				{/if}
			</nav>
		</div>
	{/if}
</header>