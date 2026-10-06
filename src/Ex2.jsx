const Header = () => {

    return <h1>Header Content</h1>

}

const Footer = () => {

    return <h3>© 2026 Dugsiiye. All rights reserved.</h3>

}

const Blog = () => {

    return (

        <div>
            <Header/>

            <main>This is Our Content</main>

            <Footer/>
        </div>
    )

}

export default Blog;