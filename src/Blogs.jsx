import { Link } from "react-router-dom";
import Card from "./Card";
import { useGetBlogsQuery } from "./services/blogApi";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();

  return (
    <div>
      <div className="mb-5 mt-3">
        <h2 className="text-primary my-5">Blogs</h2>
        <Link to={`/create`}>
          <button className="btn btn-primary">Create New Blogs</button>
        </Link>
      </div>
      <div className="d-flex flex-wrap gap-5">
        {blogs?.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
