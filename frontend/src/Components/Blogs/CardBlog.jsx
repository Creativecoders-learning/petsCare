/* eslint-disable react/prop-types */
import { PiDog } from "react-icons/pi";
import { Link } from "react-router-dom";
import blog_item_line from '../../assets/blog_item_line.png';

export default function CardBlog({ blog = {} }) {

  function getFirst30Words(text) {
    const wordsArray = text.trim().split(/\s+/);
    if (wordsArray.length > 30) {
      return wordsArray.slice(0, 30).join(" ") + "...";
    }
    return text;
  }


  const previewText = getFirst30Words(blog?.description || "");
  // console.log(previewText);

  // console.log( wordsArray);
  return (
    <>
      <div>
        <Link to={`/blog-details/${blog?._id}`}>
          {/*<!-- Component: Basic blog card --> */}
          <div className="overflow-hidden rounded  mb-10">
            {/*  <!-- Image --> */}
            <figure>
              <img
                src={`${blog?.image}`}
                alt="card image"
                className="aspect-video w-full duration-300"
              />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-2">
              <article>
                <p>{blog?.author?.name} / {blog?.author?.update}</p>

              </article>
              <header className="mb-4 mt-5">
                <h3 className="text-xl font-bold text-secondary hover:text-primary duration-300">
                  {blog?.title}
                </h3>

              </header>
              <p className="">
                {previewText}
              </p>
              <button className="text-lg text-primary font-semibold mt-5 ml-2 inline pb-4">Read More <PiDog className="inline" /> </button>
            </div>

            {/* border line */}
            <div className="w-full h-[6px] my-5">
              <img className="w-full h-full" src={blog_item_line} alt="" />
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}
