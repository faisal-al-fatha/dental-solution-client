import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Layout/Main";
import ReviewForm from "./ReviewForm";
import ReviewsCard from "./ReviewsCard";

const Review = ({ service }) => {
  const { name, _id } = service;
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState({});
  const [loading, setLoading]= useState(true)

  useEffect(() => {
    fetch(`https://dental-solution-server-beta.vercel.app/reviews/service?service=${_id}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            setLoading(false)
        });
}, [user?.email])
if (loading) {
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-emerald-400"></div>
}
console.log(reviews);

  

  return (
    <div>
      <div>
        <h3 className="text-xl text-center my-8">
          Patients Reviews of our service on {name}
        </h3>
        <p> Total Reviews: {reviews?.length}</p>
        
        {
            reviews.map(review=> <ReviewsCard review={review} reviews={reviews} setReviews={setReviews} key={review._id}></ReviewsCard>)
        }
        {user?.uid ? (
          <>
            <ReviewForm service={service}></ReviewForm>
          </>
        ) : (
          <h4 className="text-xl">Please <Link to='/login' className="btn btn-link text-xl">Login</Link> to add a review</h4>
        )}
      </div>
    </div>
  );
};

export default Review;
