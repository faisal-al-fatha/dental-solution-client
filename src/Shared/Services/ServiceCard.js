import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, image, price, name, details } = service;
  return (
    <div className="card card-compact rounded-none w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-72" src={image} alt="service" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-2xl text-sky-500 font-semibold">Price: ${price}</p>
        <p>{details.slice(0,100)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn bg-cyan-500 text-black">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
