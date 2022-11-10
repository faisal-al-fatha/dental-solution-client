import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Layout/Main";

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState({});
    const url = `http://localhost:5000/reviews?email=${user?.email}`;

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    console.log(reviews);
    return (
        <div>

            you have {reviews.length}
           {/* {
            reviews.map(review=><ReviewsCard review ={review}></ReviewsCard>)
           } */}
        </div>
    );
};

export default MyReviews;