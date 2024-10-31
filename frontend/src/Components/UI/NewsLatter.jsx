import newsLatterImg from '../../assets/news_icon.png'

const NewsLatter = () => {
    return (
        <div>
            {/* news latter box */}
        <div className="px-7 py-9 mt- bg-[#143556] my-10 ">
          <div>
            <img src={newsLatterImg} alt="" />
          </div>
          <article className="text-white text-center">
            <h1 className="text-2xl font-bold pt-6">Subscribe <br />
            Newsletter</h1>
            <p className="font-semibold pt-2 mb-5">Sign-up For Latest News</p>
          </article>
          <div className="space-y-5">
            <input className="py-3 w-full rounded-md text-center outline-none" type="text" name="" id="#" placeholder="Enter Your Email"/>
            <button className="py-3 w-full bg-primary font-semibold text-xl text-white rounded-md">Subscribe</button>
          </div>
        </div>
        </div>
    );
};

export default NewsLatter;