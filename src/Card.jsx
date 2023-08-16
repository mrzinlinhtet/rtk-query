import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from "./services/blogApi";

const Card = ({ blog: { title, image, desc, id } }) => {
  const [deleteBlog] = useDeleteBlogMutation();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <Link to={`/blogs/${id}`}>
          <button className="btn btn-primary">Details</button>
        </Link>
        <button onClick={()=> deleteBlog(id)} className="btn btn-danger ms-3">Delete</button>

      </div>
    </div>
  );
};

export default Card;
