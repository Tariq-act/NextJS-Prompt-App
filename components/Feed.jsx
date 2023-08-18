'use client';

import { useEffect, useState } from 'react';
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState('');

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, 'i');

    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.creator.tag) ||
        regex.test(item.creator.prompt)
    );
  };

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input'
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
