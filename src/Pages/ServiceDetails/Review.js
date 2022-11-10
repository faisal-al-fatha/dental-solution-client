import { useContext } from "react";
import { AuthContext } from "../../Layout/Main";

const Review = ({ service }) => {
  const { name, _id } = service;
  const { user } = useContext(AuthContext);

  const handleSubmitReview = event =>{
    event.preventDefault();
    const form = event.target;
    const reviewer = form.name.value;
    const email = user?.email;
    const ratings = form.ratings.value;
    const message = form.review.value;
  

  const review = {
    service: _id,
    serviceName: name ,
    ratings: ratings ,
    customer: reviewer,
    email,
    message

}
}

  return (
    <div>
      <div>
        <h3 className="text-3xl text-center my-8">
          Patients Reviews of our service on {name}
        </h3>
        {user?.uid ? (
          <>
            <form onSubmit={handleSubmitReview}>
              <div className="grid grid-cols-1 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="input input-ghost w-full  input-bordered"
                />
                <input
                  type="number"
                  name="ratings"
                  placeholder="Give your ratings out of 5"
                  className="input input-ghost w-full  input-bordered"
                  required
                />
                <input
                  name="email"
                  type="text"
                  placeholder="Your email"
                  defaultValue={user?.email}
                  className="input input-ghost w-full  input-bordered"
                  readOnly
                />
              </div>
              <textarea
                name="review"
                className="textarea textarea-bordered h-24 w-full my-5"
                placeholder="Your Review"
                required
              ></textarea>
              <input
                className="btn bg-cyan-500 text-black"
                type="submit"
                value="Submit your review"
              />
            </form>
          </>
        ) : (
          <h4>Please login to add a review</h4>
        )}
      </div>
    </div>
  );
};

export default Review;
