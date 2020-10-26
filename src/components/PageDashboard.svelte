<script>
    export let dtIndex = {};
    
</script>

<div>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Your Website Content Information
            </h3>
        </div>
        <div>
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                        class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div
                            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Content
                                        </th>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            All
                                        </th>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Show
                                        </th>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Hide
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {#each dtIndex.data.content as { all, show, hide, name }, i}
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {name}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {all}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {show}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {hide}
                                        </td>
                                    </tr>
                                    {/each}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                History Inbox
            </h3>
        </div>
        <div>
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                        class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div
                            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Count
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {#each dtIndex.data.history_inbox as { created_at, count }, i}
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {created_at}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {count}
                                        </td>
                                    </tr>
                                    {/each}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                History News
            </h3>
        </div>
        <div>
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                        class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div
                            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            All
                                        </th>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Show
                                        </th>
                                        <th
                                            class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            hide
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {#each dtIndex.data.history_news as { created_at, all, show, hide }, i}
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {created_at}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {all}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {show}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {hide}
                                        </td>
                                    </tr>
                                    {/each}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
