const MainTable = () => {
    return (
        <section class="main-list">
            <h3 class="sub-heading">List Cuisine</h3>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">Cuisine Name</th>
                            <th scope="col" class="px-6 py-3">Description</th>
                            <th scope="col" class="px-6 py-3">Price</th>
                            <th scope="col" class="px-6 py-3">imgUrl</th>
                            <th scope="col" class="px-6 py-3">categoryId</th>
                            <th scope="col" class="px-6 py-3">authorId</th>
                            <th scope="col" class="px-6 py-3">createdAt</th>
                            <th scope="col" class="px-6 py-3">updatedAt</th>
                            <th scope="col" class="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Nasi Goreng Ayam Utuh
                            </th>
                            <td class="px-6 py-4">Lorem ipsum, dolor sit amet</td>
                            <td class="px-6 py-4">Rp875.000</td>
                            <td class="px-6 py-4">ayam-panggang-goreng-tepung.</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4 text-right">
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
                                >Delete</a>
                            </td>
                        </tr>
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Ikan Bakar Ayam Panggang Goreng
                            </th>
                            <td class="px-6 py-4">Lorem ipsum, dolor sit amet</td>
                            <td class="px-6 py-4">Rp75.000</td>
                            <td class="px-6 py-4">ayam-panggang-goreng-tepung.</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4 text-right">
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
                                Ayam Panggang Dada + Nasi
                            </th>
                            <td class="px-6 py-4">Lorem ipsum, dolor sit amet</td>
                            <td class="px-6 py-4">Rp938.000</td>
                            <td class="px-6 py-4">ayam-panggang-goreng-tepung.</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4 text-right">
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
                                Ayam Lemon Panggang Ikan Teri
                            </th>
                            <td class="px-6 py-4">Lorem ipsum, dolor sit amet</td>
                            <td class="px-6 py-4">Rp23.000</td>
                            <td class="px-6 py-4">ayam-panggang-goreng-tepung.</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4 text-right">
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
                                Minyak Goreng Ayam Panggang
                            </th>
                            <td class="px-6 py-4">Lorem ipsum, dolor sit amet</td>
                            <td class="px-6 py-4">Rp657.000</td>
                            <td class="px-6 py-4">ayam-panggang-goreng-tepung.</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4 text-right">
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
                                Ayam Panggang Dada Goreng Tepung
                            </th>
                            <td class="px-6 py-4">Lorem ipsum, dolor sit amet</td>
                            <td class="px-6 py-4">Rp90.000</td>
                            <td class="px-6 py-4">ayam-panggang-goreng-tepung.</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">1</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4">08 Nov 2023</td>
                            <td class="px-6 py-4 text-right">
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

export default MainTable;