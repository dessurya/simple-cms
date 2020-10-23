<script>
    export let dtIndex = {};
    let { data, success } = dtIndex;
    let { content, history_inbox, history_news } = data;
    let {
        News,
        Kemitraan,
        Location,
        Slider,
        MenuReguler,
        MenuPromo,
    } = JSON.parse(JSON.stringify(content).replace(/\s/g, ""));
</script>

<div>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
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
                                            hide
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            News
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {News.all}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {News.show}
                                        </td>
                                        <td
                                            class="px-6 py-4 whitespace-no-wrap">
                                            {News.hide}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
