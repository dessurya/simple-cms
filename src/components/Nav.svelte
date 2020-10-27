<script>
	import { createEventDispatcher } from "svelte";
	import { stores } from "@sapper/app";
	const { session } = stores();
	const dispacth = createEventDispatcher();

	export let auth, segmented, navItem, userNav;
	let hidden = true;
	
	const hendleClearSession = () => {
		$session.auth = null;
	};

	const hendleDropdownMenu = () => {
		hidden = !hidden
	}
</script>

<div>
	<nav class="bg-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<img
							class="h-8 w-8"
							src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
							alt="Workflow logo" />
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4">
							{#each navItem as item}
								<a
									on:click={() => dispacth('hendleChangSegmented', item)}
									href="#{item}"
									class:bg-gray-900={item === segmented}
									class="px-3 py-2 rounded-md text-sm font-medium text-white focus:outline-none focus:text-white focus:bg-gray-700">{item}</a>
							{/each}
						</div>
					</div>
				</div>
				<div class="hidden md:block">
					<div class="ml-3 relative">
						<div>
							<button
								on:click="{hendleDropdownMenu}"
								class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
								id="user-menu"
								aria-label={auth.user.name}
								aria-haspopup="true">
								<label for="" class="mx-2">Welcome
									{auth.user.name}</label>
								<img
									class="h-8 w-8 rounded-full"
									src="https://icon-library.com/images/user-icon-png-transparent/user-icon-png-transparent-23.jpg"
									alt="" />
							</button>
						</div>
						<div
							class:hidden={hidden == true}
							class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
							<div
								class="py-1 rounded-md bg-white shadow-xs"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu">
								{#each userNav as item}
								<a
									on:click={() => dispacth('hendleChangSegmented', item)}
									href="#{item}"
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem">{item}</a>
								{/each}
								<a
									href="#SignOut"
									on:click|preventDefault={hendleClearSession}
									class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem">Sign Out</a>
							</div>
						</div>
					</div>
				</div>
				<div class="-mr-2 flex md:hidden">
					<!-- Mobile menu button -->
					<button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
					  <!-- Menu open: "hidden", Menu closed: "block" -->
					  <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					  </svg>
					  <!-- Menu open: "block", Menu closed: "hidden" -->
					  <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					  </svg>
					</button>
				</div>
			</div>
		</div>
	</nav>
</div>
