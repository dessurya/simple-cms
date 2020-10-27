<script>
    import { createEventDispatcher } from 'svelte';
    const dispacth = createEventDispatcher();

    export let row
    let {id} = row

    let selected = false

    const hendleSelectedRow = () => {
        selected = !selected
        dispacth('hendleGetUserId', {id, selected})
	}
</script>
<tr class="cursor-pointer" class:bg-blue-100={selected == true} on:click={hendleSelectedRow}>
    <td
        class="px-6 py-4 whitespace-no-wrap">
        {row.name}
    </td>
    <td
        class="px-6 py-4 whitespace-no-wrap">
        {row.email}
    </td>
    <td
        class="px-6 py-4 whitespace-no-wrap">
        {row.flag_send_notif}
    </td>
</tr>