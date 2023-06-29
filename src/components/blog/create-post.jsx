import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './blogStyles.css'
import { Navigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};
const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]
function CreatePost() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [files, setFiles] = useState('')
  const [content, setContent] = useState('')
  const [redirect, setRedirect] = useState(false)

  async function submit(ev) {
    const data = new FormData();
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    data.set('file', files[0])

    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
    })
    if (response.ok) {
      setRedirect(true);
    }

  }

  function handleSummaryChange(ev) {
    setSummary(ev.target.value);
    ev.target.style.height = "auto"; // Reset the height to auto
    ev.target.style.height = `${ev.target.scrollHeight}px`; // Set the height to match the scroll height
  }

  function handleTitleChange(ev) {
    setTitle(ev.target.value);
    ev.target.style.height = "auto"; // Reset the height to auto
    ev.target.style.height = `${ev.target.scrollHeight}px`; // Set the height to match the scroll height
  }

  if (redirect) {
    return (<Navigate to={"/"} />)
  }

  return (
    <div className="create-post-body">
      <form className="create-post-form" onSubmit={submit}>
        <div className='createPost-container row'>
          <div className=" column col-sm-6">
            <h1 className="title">Create A New Post</h1>
            <textarea
              placeholder="Title"
              className="create-post-title"
              value={title}
              onChange={handleTitleChange} />
            <textarea
              type='text'
              placeholder="Summary"
              className="create-post-summary"
              value={summary}
              onChange={handleSummaryChange}
            />
            <input
              type="file"
              className="create-post-file"
              onChange={ev => setFiles(ev.target.files)} />
          </div>
          <div className="col-sm-6">

            <ReactQuill
              className="create-post-editor"
              placeholder="Create post"
              value={content}
              onChange={newVal => setContent(newVal)}
              modules={modules}
              formats={formats} />
          </div>
        </div>
        <button className='createButton'>Create Post</button>
      </form>
    </div >
  );
}

export default CreatePost;
