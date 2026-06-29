<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		variant?: 'primary' | 'secondary';
		children: Snippet;
	};

	let { href, variant = 'primary', children }: Props = $props();

	const baseClasses =
		'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition';

	const variantClasses = {
		primary: 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300',
		secondary: 'border border-white/20 text-slate-100 hover:border-cyan-300/60 hover:bg-white/10 hover:text-white'
	};
</script>

<a {href} class={`${baseClasses} ${variantClasses[variant]}`}>
	{@render children()}
</a>