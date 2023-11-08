const Pagination = () => {

    return (
        <section className="pagination flex flex-col place-content-center">
            <span className="text-sm text-black">
                Showing <span className="font-semibold text-black">1</span> to <span className="font-semibold text-black">6</span>
            </span>
            <div
                className="flex"
            // className="flex w-[7rem] h-20"
            >
                {/* <!-- Help text --> */}
                {/* <!-- Buttons --> */}
                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-[#A6CF98] dark:text-gray-400 dark:hover:text-white">Prev</button>
                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l rounded-r hover:bg-[#A6CF98] dark:text-gray-400 dark:hover:text-white">Next</button>
                {/* <div className="inline-flex mt-2 xs:mt-0">
                </div> */}
            </div>
        </section>
    )
}

export default Pagination;