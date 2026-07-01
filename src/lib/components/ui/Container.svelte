<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
	};

	let { children, class: className = '' }: Props = $props();
</script>

<div class={`mx-auto max-w-6xl px-6 ${className}`}>
	{@render children()}
</div>