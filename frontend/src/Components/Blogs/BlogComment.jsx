
import { useState } from 'react';
import img from '../../assets/dog3.jpg';

const BlogComment = () => {
    // const {comments} = useComment()
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]); 
          setNewComment(""); 
        }
      };

     //comment adding function
    //  const addComment = ()=>{
    //     const comment = document.getElementById('comment-input').value;
    //     addData('comment', comment)
    // } 
    // function addData(key, newData) {
    //     let existingData = JSON.parse(localStorage.getItem(key)) || [];
    //     existingData.push(newData);
    //     localStorage.setItem(key, JSON.stringify(existingData));
    //   }

    //   show comment in the screen
//    const showComment = ()=>{
//     const body = document.getElementById('comment-body')
//     const comment = document.getElementById('comment-input').value;
//     const div = document.createElement('div')
//     div.innerHTML=`
//         <div className='flex my-9'>
//                     <div className='w-16 h-16 mr-10'>
//                         <img className='w-full h-full rounded-full' src="https://i.ibb.co.com/2P6D1Lm/author.jpg" alt="author image" />
//                     </div>
//                     <article>
//                         <p className='text-xl'>user name:</p>
//                         <p className='text-2xl '>${comment}</p>
//                     </article>
//                 </div>
//     `
//     body.appendChild(div)
//    }
//     showComment()

    return (
        <div>
            {/* add comment section */}
            <div className='mt-24  p-10 flex gap-2 '>
                    {/* user image */}
                    <div className='w-14 h-14 mr-2'>
                        <img className='w-full h-full rounded-full' src={img} alt="" />
                    </div>
                    {/* comment input */}
                    <div className='flex-1'>
                        <input
                        onChange={(e) => setNewComment(e.target.value)}
                        id='comment-input' className='p-3 w-full focus:outline-none' type="text" placeholder='Add a comment' />
                        <hr className=''/>
                        
                        <div className='flex justify-end'>
                        <button 
                        // onClick={()=> addComment()}
                        onClick={handleAddComment}
                        className='bg-primary hover:bg-[#cf4137e7] py-2 px-5 rounded-full text-xl font-semibold text-white mt-2'>Comment</button>
                        </div>
                    </div>
            </div>

            {/* show comment section */}
            <div>
                {
                    comments?.map(c =>
                        <div id='comment-body' key={c.comment} className='flex my-9'>
                        <div className='w-16 h-16 mr-10'>
                        <img className='w-full h-full rounded-full' src={c?.user} alt="author image" />
                        </div>
                        <article>
                        <p className='text-xl'>user name:</p>
                        <p className='text-2xl '>{c}</p>
                        </article>
                        </div>
                        // console.log(comment)
                       )
                }


                {/* comment 1 */}
                <div className='flex my-9'>
                    <div className='w-16 h-16 mr-10'>
                        <img className='w-full h-full rounded-full' src="https://i.ibb.co.com/2P6D1Lm/author.jpg" alt="author image" />
                    </div>
                    <article>
                        <p className='text-xl'>user name:</p>
                        <p className='text-2xl '>user comment:</p>
                    </article>
                </div>
                {/* comment 2 */}
                <div className='flex my-9'>
                    <div className='w-16 h-16 mr-10'>
                        <img className='w-full h-full rounded-full' src="https://i.ibb.co.com/2P6D1Lm/author.jpg" alt="author image" />
                    </div>
                    <article>
                        <p className='text-xl'>user name:</p>
                        <p className='text-2xl font-normal'>user comment:</p>
                    </article>
                </div>
                {/* comment 3 */}
                <div className='flex my-9'>
                    <div className='w-16 h-16 mr-10'>
                        <img className='w-full h-full rounded-full' src="https://i.ibb.co.com/2P6D1Lm/author.jpg" alt="author image" />
                    </div>
                    <article>
                        <p className='text-xl'>user name:</p>
                        <p className='text-2xl'>user comment:</p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default BlogComment;