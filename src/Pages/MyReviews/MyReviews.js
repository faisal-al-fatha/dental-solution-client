import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Layout/Main";
import ReviewsCard from "../ServiceDetails/ReviewsCard";

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading]= useState(true)


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            });
    }, [user?.email])
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-emerald-400"></div>
    }
    
    return (
        <div>

            you have {reviews?.length}
           {
            reviews?.map(review => <ReviewsCard review={review}></ReviewsCard> )
}
        </div>
    );
};

export default MyReviews;