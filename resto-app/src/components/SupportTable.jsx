const SupportTable = () => {
    return (
        <section class="main-list">
            <h3 class="sub-heading">List Category</h3>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">Category Name</th>
                            <th scope="col" class="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Heavy Meal
                            </th>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-green-600 dark:text-blue-500 hover:underline"
                                >Add</a
                                >
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >Edit</a
                                >
                                <a
                                    href="#"
                                    class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >Delete</a
                                >
                            </td>
                        </tr>
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Drinks
                            </th>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-green-600 dark:text-blue-500 hover:underline"
                                >Add</a
                                >
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >Edit</a
                                >
                                <a
                                    href="#"
                                    class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >Delete</a
                                >
                            </td>
                        </tr>
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Dessert
                            </th>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="font-medium text-green-600 dark:text-blue-500 hover:underline"
                                >Add</a
                                >
                                <a
                                    href="#"
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >Edit</a
                                >
                                <a
                                    href="#"
                                    class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                                >Delete</a
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default SupportTable;