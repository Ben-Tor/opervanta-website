<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<div class="min-h-screen">
	<Header />
	{@render children()}
	<Footer />
</div>