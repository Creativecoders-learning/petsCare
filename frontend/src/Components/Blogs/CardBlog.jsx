import { Link } from "react-router-dom";

export default function CardBlog({blog = {}}) {

function getFirst30Words(text) {
  const wordsArray = text.trim().split(/\s+/);
  if (wordsArray.length > 30) {
      return wordsArray.slice(0, 15).join(" ") + "...";
  }
  return text;
}


const previewText = getFirst30Words(blog?.description);
// console.log(previewText);

    // console.log( wordsArray);
  return (
    <>
      <div>
        <Link to={`/blog-details/${blog?.id}`}>
         {/*<!-- Component: Basic blog card --> */}
         <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={`${blog?.image}`}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-2">
          <header className="mb-4">
            <h3 className="text-lg font-medium text-slate-700">
              {blog?.title}
            </h3>
           
          </header>
          <p>
            {previewText} 
            <button className="text-xs text-blue-600 hover:text-blue-400 mt-1 ml-2">Read More</button>
          </p>
          
          <article className="flex justify-between mt-2">
            <p className="text-xs">{blog?.view_count} views</p>
            {/* <p>{blog?.rating}</p> */}
          </article>
          
        </div>
        </div>
        </Link>
      </div>
    </>
  )
}
