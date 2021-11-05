import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';
import { Prepared } from '../../typedefs';
import CommentList from '../CommentList';

type Props = {
  post: Prepared,
};

export const PostInfo:React.FC<Props> = ({ post }) => {
  return (
    <li className="list__item">
      <p className="list__item--title">
        {post.title}
      </p>
      <p className="list__item--body">
        {post.body}
      </p>
      {post.user
        ? (
          <UserInfo user={post.user} />
        )
        : null}
      <div className="list__item--comment">
        Comments...
      </div>
      <CommentList comments={post.comments} />
    </li>
  );
};
