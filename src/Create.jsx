import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAddBlogMutation } from './services/blogApi';

const Create = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const [addBlog] = useAddBlogMutation();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newBlog = {id: Date.now(), title, desc, image}
        addBlog(newBlog);
        console.log(newBlog);
        navigate('/');
    }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-group my-5">
        <label htmlFor="" className="form-label">Title</label>
        <input type="text" name="" id="" className="form-control" value={title} onChange={e=> setTitle(e.target.value)} />
      </div>
      <div className="form-group my-5">
        <label htmlFor="" className="form-label">Description</label>
        <input type="text" name="" id="" className="form-control" value={desc} onChange={e=> setDesc(e.target.value)} />
      </div>
      <div className="form-group my-5">
        <label htmlFor="" className="form-label">Image</label>
        <input type="text" name="" id="" className="form-control" value={image} onChange={e=> setImage(e.target.value)} />
      </div>
      <button className="btn btn-outline-primary">Create</button>
      <Link to={`/`}>
      <button className="btn btn-outline-danger ms-3">Back</button>
      </Link>
    </form>
  )
}

export default Create
