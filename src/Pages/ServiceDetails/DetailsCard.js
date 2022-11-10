import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DetailsCard = ({ service }) => {
    const { _id, image, price, name, details,ratings } = service;
    console.log(_id);
    return (
      <div className="card card-compact rounded-none w-11/12 bg-base-100 shadow-xl">
        <h3 className="text-3xl text-center my-8 mx-6">Service Details of {name}</h3>
        <figure>
          <img className="h-96" src={image} alt="service" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p><small>Ratings: {ratings} <span className="text-amber-500">{<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>} {<FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon>}</span></small></p>
          <p className="text-2xl text-sky-500 font-semibold">Price: ${price}</p>
          <p>{details}</p>
         
        </div>
      </div>
    );
  };

export default DetailsCard;