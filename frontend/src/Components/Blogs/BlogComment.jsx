
import img from '../../assets/dog3.jpg';
import useComment from '../../Hooks/api/useComment';

const BlogComment = () => {
    const {comments} = useComment()
    console.log(comments);

     //comment adding function
     const addComment = ()=>{
        const comment = document.getElementById('comment-input').value;
        addData('comment', comment)
    } 
    function addData(key, newData) {
        let existingData = JSON.parse(localStorage.getItem(key)) || [];
        existingData.push(newData);
        localStorage.setItem(key, JSON.stringify(existingData));
      }

    //   show comment in the screen
    // const comments = JSON.parse(localStorage.getItem("comment")) || []
    

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
                        <input id='comment-input' className='p-3 w-full focus:outline-none focus:border-blue-500 focus:ring-2 ' type="text" placeholder='Add a comment' />
                        <hr className=''/>
                        
                        <div className='flex justify-end'>
                        <button onClick={()=> addComment()} className='bg-primary hover:bg-primaryLight py-2 px-5 rounded-full text-xl font-semibold text-white mt-2'>Comment</button>
                        </div>
                    </div>
            </div>

            {/* show comment section */}
            <div id='comment-body'>
                {
                    comments?.map(c =>
                        // <article key={comment}>
                        //      <p className='font-semibold text-xl  py-2 my-4'>{comment}</p>
                        // </article>
                        <div key={c.comment} className='flex my-9'>
                    <div className='w-16 h-16 mr-10'>
                        <img className='w-full h-full rounded-full' src={c?.user} alt="author image" />
                    </div>
                    <article>
                        <p className='text-xl'>user name:</p>
                        <p className='text-2xl '>{c?.comment}</p>
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