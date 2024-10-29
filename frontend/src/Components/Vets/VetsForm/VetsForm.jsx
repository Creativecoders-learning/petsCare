
const VetsForm = () => {
    const HandleSubmit = () => {};

    return (
        <div>
            <form onSubmit={HandleSubmit} className="border px-4 pb-8 pt-5">
            <h2 className="text-xl font-bold text-primary mb-3">Book Appointment</h2>
          
          <div className="mb-5">
            <label className="">Name</label>
            <input
              id="name"
              type="name"
              placeholder="Your name"
              className="w-full rounded-lg px-2 mt-2 py-2  border border-primary"
            />
          </div>
          <div className="mb-5">
            <label className="">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg px-2 mt-2 py-2  border border-primary"
            />
          </div>
          <div className="mb-5">
            <label className="">Phone</label>
            <input
              id="phone"
              type="number"
              placeholder="Phone Number"
              className="w-full rounded-lg px-2 mt-2 py-2  border border-primary"
            />
          </div>
          <div className="mb-5">
            <label className="">Select your date</label>
            <input
              id="date"
              type="date"
              className="w-full rounded-lg px-2 mt-2 py-2  border border-primary"
            />
          </div>
          <div >
            <label className="">Message</label>
            <textarea name="message" className="w-full h-20 border border-primary mt-3 p-3" placeholder="Write yor message" id=""></textarea>
          </div>
          <div>
            <button className="w-full py-3 bg-primary text-white rounded-xl mt-5 hover:bg-black">Book Now</button>
          </div>
        </form>
        </div>
    );
};

export default VetsForm;