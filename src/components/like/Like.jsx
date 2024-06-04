import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromLike } from '../../lib/action/action';

const Like = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.like.items);

  return (
    <div>
      <h1>Liked Products</h1>
      <ul>
        {likedItems.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} width="50" />
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <button onClick={() => dispatch(removeFromLike(item))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Like;
