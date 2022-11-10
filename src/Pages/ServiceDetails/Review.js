import { useContext } from "react";
import { AuthContext } from "../../Layout/Main";
import ReviewForm from "./ReviewForm";

const Review = ({ service }) => {
  const { name, _id } = service;
  const { user } = useContext(AuthContext);

  

  return (
    <div>
      <div>
        <h3 className="text-3xl text-center my-8">
          Patients Reviews of our service on {name}
        </h3>
        {/* <ReviewsCard></ReviewsCard> */}
        {user?.uid ? (
          <>
            <ReviewForm service={service}></ReviewForm>
          </>
        ) : (
          <h4>Please login to add a review</h4>
        )}
      </div>
    </div>
  );
};

export default Review;
