import React from 'react';
import { useGettUsersQuery} from '../store/Features/api/apiSlice';

const Home = () => {
  const { data, error, isLoading } = useGettUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default Home;