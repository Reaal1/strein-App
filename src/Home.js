
import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {
 const {data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

/*const handleDelete = (id) => {
   const newBlogs = blogs.filter(blog => blog.id !== id);
   setBlogs(newBlogs);
}*/



   return ( 
        <div className="home">
         {error && <div>{error}</div> }
         {isPending && <div>Loading...</div>}
         {blogs && <BlogList blogs={blogs} title='All Strands...' /*handleDelete={handleDelete}*//>}
        {/*<button onClick={() => setName('Reo')}>change name</button>*/}
        <p>{/*name*/}</p>
        </div>
    );
}
 
export default Home;