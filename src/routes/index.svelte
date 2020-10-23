<script context="module">
	export async function preload(page, session) {
		let { auth } = session;
		if (!auth) return this.redirect(302, "/login");
		return { auth };
	}
</script>

<script>
	import { stores } from "@sapper/app";
	const { session } = stores();
	import Nav from "../components/Nav.svelte";
	import PageTitle from "../components/PageTitle.svelte";
	import PageDashboard from "../components/PageDashboard.svelte";
	import PageUser from "../components/PageUser.svelte";
	export let auth;

	let navItem = ["Dashboard", "User", "Inbox", "News"],
		userNav = ["Profile", "Setting"];

	let segmented, dtIndex;

	const hendleChangSegmented = (params) => {
		segmented = params.detail;
		dtIndex = hendleGetIndexDt(segmented);
	};

	const hendleGetIndexDt = async (segmented) => {
		const getDt = await fetch("myexportfunction/get" + segmented, {
			method: "POST",
			credentials: "same-origin",
			body: JSON.stringify(auth),
			headers: {
				"Content-Type": "application/json",
			},
		});
		return await getDt.json();
	};
</script>

<svelte:head>
	<title>Simple CMS - {segmented}</title>
</svelte:head>

<div>
	<Nav
		{auth}
		{navItem}
		{userNav}
		{segmented}
		on:hendleChangSegmented={hendleChangSegmented} />
	<PageTitle {auth} {segmented} />

	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<div class="px-4 py-6 sm:px-0">
				{#await dtIndex}
					<p>...waiting</p>
				{:then dtIndex}
					{#if segmented == navItem[0]}
						<PageDashboard {dtIndex} />
					{:else if segmented == navItem[1]}
						<PageUser {dtIndex} />
					{/if}
				{/await}
			</div>
		</div>
	</main>
</div>
