import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleBlogQuery, useUpdateBlogMutation } from "./services/blogApi";

const Edit = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [updateBlog] = useUpdateBlogMutation(id);


  useEffect(() => {
    setTitle(blog?.title);
    setDesc(blog?.desc);
    setImage(blog?.image);
  },[blog]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newData = { id, title, desc, image }
    updateBlog(newData);
    navigate("/")
  }
  ;

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group my-5">
        <label htmlFor="" className="form-label">
          Title
        </label>
        <input
          type="text"
          name=""
          id=""
          className="form-control"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group my-5">
        <label htmlFor="" className="form-label">
          Description
        </label>
        <input
          type="text"
          name=""
          id=""
          className="form-control"
          defaultValue={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="form-group my-5">
        <label htmlFor="" className="form-label">
          Image
        </label>
        <input
          type="text"
          name=""
          id=""
          className="form-control"
          defaultValue={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button className="btn btn-outline-success">Update</button>
      <Link to={`/`}>
        <button className="btn btn-outline-danger ms-3">Back</button>
      </Link>
    </form>
  );
};

export default Edit;
