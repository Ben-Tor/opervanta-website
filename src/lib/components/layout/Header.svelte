<script lang="ts">
	import { resolve } from '$app/paths';
	import { navigationLinks } from '$lib/data/navigation';
</script>

<header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href={resolve('/')} class="flex items-center gap-3" aria-label="Opervanta home">
			<span
				class="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-sm font-bold text-slate-950"
			>
				O
			</span>

			<span class="text-sm font-semibold tracking-wide text-white">Opervanta</span>
		</a>

		<nav class="hidden items-center gap-8 text-sm font-medium text-white md:flex">
			{#each navigationLinks as link (link.href)}
				<a href={resolve(link.href)} class="transition hover:text-cyan-300">
					{link.label}
				</a>
			{/each}
		</nav>

		<a
			href={resolve('/contact')}
			class="hidden rounded-full border border-white bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:border-white hover:bg-cyan-400 hover:text-slate-950 md:inline-flex"
		>
			Request review
		</a>
	</div>
</header>