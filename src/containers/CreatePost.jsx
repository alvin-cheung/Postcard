import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../../reducers/postsSlice';


const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  // const [addRequestStatus, setAddReuqestStatus] = useState('idle')

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new blog post using the input values
    const newBlogPost = {
      title,
      content,
      tags
  }
    dispatch(addNewPost(newBlogPost))
    console.log('New Blog Post:', newBlogPost);

    // Reset the input fields
    setTitle('');
    setContent('');
  };
  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleAddTag = (event) => {
    event.preventDefault();
    if (tagInput.trim() !== '') {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const handleClearTag = () => {
    setTags([]);
  }

  return (
    <div className="bg-slate-300 shadow-lg rounded-lg p-6 max-w-4xl mx-auto m-10">
      <h2 className="text-xl font-semibold mb-2">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium text-gray-800">Title</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-800">Content</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            className="border border-gray-300 rounded p-2 w-full h-32 resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mx-1 rounded hover:bg-blue-600 focus:outline-none"
        >
          Create Post
        </button>
        <div className="mt-4">
        <input
          type="text"
          placeholder="Add a tag..."
          value={tagInput}
          onChange={handleTagInputChange}
          className="border border-gray-300 rounded p-2 w-full"
        />
          <button
          onClick={handleAddTag}
          className="mt-2 mx-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Add Tag
        </button>
        <button
          onClick={handleClearTag}
          className="mt-2 mx-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Clear Tags
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Tags:</h3>
        <ul>
          {tags.map((tag, index) => (
            <li key={index} className="mb-2">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      </form>
    </div>
  );
};

export default CreatePost;