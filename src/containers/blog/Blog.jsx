import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Designing for IoT & Wearables " childText="Discover how design helps transform users' lives in Wearables space, and understand the challenges of designing for IoT & acquire important design principles to keep in mind while designing for the Wearable tech." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="why UX Design in Asia Pacific Region should be prioritized" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="The knowledge gained from projects across industries helps us take up new challenges. " />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Learn more about our culture, research methods and design philosophy." />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
