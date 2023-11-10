const Form = () => {
    return (
        <section class="create">
            <div class="row">
                <div class="image">
                    <img src="../image/about-img.svg" alt="" />
                </div>
                <form action="" method="post">
                    <h3>Create Cuisine</h3>
                    <input
                        type="text"
                        name="name"
                        class="box"
                        placeholder="Cuisine Name"
                        required />
                    <textarea
                        name="Description"
                        id=""
                        class="box"
                        required
                        placeholder="Description"
                        cols="30"
                        rows="10"></textarea>
                    <input
                        type="text"
                        name="price"
                        class="box"
                        placeholder="Price"
                        required />
                    <input
                        type="text"
                        name="imgUrl"
                        class="box"
                        placeholder="Image URL" />
                    <input type="file" name="imgFile" id="" class="box" required />
                    <button
                        type="submit"
                        class="text-white px-2.5 py-1 rounded text-sm font-medium bg-gray-800 border-0 border-l hover:bg-[#15803d] dark:text-gray-400 dark:hover:text-white">
                        Create
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Form;