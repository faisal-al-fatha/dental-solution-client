import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Layout/Main";
import ReviewsCard from "../ServiceDetails/ReviewsCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [user?.email]);
  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-emerald-400"></div>
    );
  }

  return (
    <div>
{reviews?.length=== 0 ? 
<div className="h-screen flex items-center justify-center"><h2 className="text-3xl">No reviews were added</h2></div>
:
<>
<h2> you have {reviews?.length} reviews</h2>
      {reviews?.map((review) => (
        <ReviewsCard review={review} reviews={reviews} setReviews={setReviews} key={review._id}></ReviewsCard>
      ))}
    
</>}

</div>  
  );
};

export default MyReviews;
