import { Link, useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "./services/blogApi";

const Details = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  console.log(blog);
  return (
    <div>
      <img src={blog?.image} width="300px" className="my-3" alt="" />
      <h3 className="text-primary">Title</h3>
      <p>{blog?.title}</p>
      <h3 className="text-primary">Description</h3>
      <p>{blog?.desc}</p>
      <Link to={`/`}>
        <button className="btn btn-outline-danger">Back to home</button>
      </Link>
      <Link to={`/edit/${blog?.id}`}>
        <button className="btn btn-outline-success">Edit</button>
      </Link>
    </div>
  );
};

export default Details;
