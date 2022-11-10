import {
    faPenToSquare,
    faStar,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewsCard = ({ review, reviews, setReviews }) => {
  const { serviceName, ratings, customer, email, userImage, message, _id } =
    review;

  const handleDeleteReview = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div className="my-6 ">
      <div className="container flex flex-col w-full  p-6 mx-auto divide-y rounded-none divide-gray-700 bg-gray-200 text-gray-900">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={userImage}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{customer}</h4>
              <span className="text-xs text-gray-900">{email}</span>
            </div>
          </div>
          <div className="flex w-24 justify-between items-center">
            <div>
              <button onClick={()=>handleDeleteReview(_id)}>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </button>
            </div>
            <div>
              {" "}
              <button>
                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
              </button>
            </div>

            <div className="flex items-center space-x-2 dark:text-yellow-500">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <span className="text-xl font-bold text-gray-900">{ratings}</span>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-900">
          <p className="text-xl">Service Name: {serviceName} </p>
          <p className="my-3">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
