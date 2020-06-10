import React from 'react';
import {
  PostContainer,
  PostImage,
  PostImageContainer,
  PostCover,
  PostCardContainer,
  PostCardName,
  PostContent,
  PostTest,
  PostCardIcon,
  PostIcons,
} from './postcard.styles';

import {
  comment,
  retweet,
  like,
  bookmarkArrow,
  bookmark,
} from '../utils/Icons';

const PostCard = () => {
  return (
    <PostContainer>
      <PostCover>
        <PostTest>
          <PostImageContainer>
            <PostImage
              src="https://www.gstatic.com/tv/thumb/persons/983712/983712_v9_ba.jpg"
              alt="messi"
            />
          </PostImageContainer>
        </PostTest>
        <PostCardContainer>
          <PostCardName>
            <span style={{ fontWeight: 'bold' }}>akinjide Jimoh</span> &nbsp;
            &nbsp;
            <span style={{ fontWeight: 'lighter' }}> @hazeejim</span>
          </PostCardName>
          <PostContent>
            This is a man of his words who only talk bla bla Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nisi itaque at, enim
            excepturi sint hic quas labore, quos aspernatur dolorem eaque iure
            praesentium eligendi, non dignissimos ad aliquid consequuntur unde.
          </PostContent>
          <PostCardIcon>
            <PostIcons viewBox="0 0 24 24">
              <g>
                <path d={comment}></path>
              </g>
            </PostIcons>
            <PostIcons viewBox="0 0 24 24">
              <g>
                <path d={retweet}></path>
              </g>
            </PostIcons>
            <PostIcons viewBox="0 0 24 24">
              <g>
                <path d={like}></path>
              </g>
            </PostIcons>
            <PostIcons viewBox="0 0 24 24">
              <g>
                <path d={bookmarkArrow}></path>
                <path d={bookmark}></path>
              </g>
            </PostIcons>
          </PostCardIcon>
        </PostCardContainer>
      </PostCover>
    </PostContainer>
  );
};

export default PostCard;
