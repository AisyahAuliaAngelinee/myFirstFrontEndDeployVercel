const Pagination = () => {
    return (
        <section class="pagination flex place-content-center">
            <div class="flex flex-col w-[7rem] h-20 place-content-center">
                {/* <!-- Help text --> */}
                <span class="text-sm text-black">
                    Showing <span class="font-semibold text-black">1</span> to <span class="font-semibold text-black">6</span>
                </span>
                {/* <!-- Buttons --> */}
                <div class="inline-flex mt-2 xs:mt-0">
                    <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-[#A6CF98] dark:text-gray-400 dark:hover:text-white">Prev</button>
                    <button class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l rounded-r hover:bg-[#A6CF98] dark:text-gray-400 dark:hover:text-white">Next</button>
                </div>
            </div>
        </section>
    )
}

export default Pagination;