
// import { useState } from 'react';
// import img from '../../assets/dog3.jpg';

import { useEffect, useState } from "react";

const BlogComment = () => {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [commentText, setCommentText] = useState("");
  
    // Load comments from localStorage on initial render
    useEffect(() => {
      const savedComments = localStorage.getItem("comments");
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }
    }, []);
  
    const handleAddComment = () => {
      const newComment = { name, email, commentText };
      
      // Update the comments array and save it to localStorage
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      
      // Clear the input fields
      setName("");
      setEmail("");
      setCommentText("");
    };

    return (
      <>
            <div className="px-7 py-8 my-10 bg-secondaryLight rounded-md">
            <article>
        <h1 className="relative text-2xl font-bold text-secondary py-6 
        before:content-normal 
        before:absolute 
        before:w-16
        before:h-[1px]
        before:left-0
        before:bottom-0
        before:bg-primary
        ">Leave A Reply</h1>
            </article>
            {/* input field */}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleAddComment();
                    }} className="">
                    <div className="mt-7 lg:flex gap-5">
                        <input onChange={(e) => setName(e.target.value)} className="p-4 outline-none w-full rounded-sm text-lg" type="text" placeholder="Author*" />
                        <input  onChange={(e) => setEmail(e.target.value)} className="p-4 outline-none w-full rounded-sm text-lg lg:mt-0 mt-5" type="email" placeholder="Email*" />
                    </div>
                    <div className="my-5">
                        <textarea  onChange={(e) => setCommentText(e.target.value)} className="p-4 outline-none w-full rounded-sm text-lg" name="comment" id="" placeholder="Type Comment Here..." rows="4" cols=""></textarea>
                        <div className="flex gap-2 text-xl text-gray-800 font-medium my-2">
                        <input type="checkbox" name="checkbox" id="" />
                        <p>Don't show your email address</p>
                        </div>

                        <button  className="bg-primary text-white font-bold text-2xl py-3 px-5 mt-7">Submit Now</button>
                        {/* <AdoptionButton text={'Submit Now'}  /> */}
                    </div>
                </form>
            </div>
      </>
    );
};

export default BlogComment;