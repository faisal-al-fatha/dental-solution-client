import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import Review from "./Review";
const ServiceDetails = () => {
  const service = useLoaderData();
  return (
    <div className="hero w-full">
      <div className="grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
        <div>
          <DetailsCard service={service}></DetailsCard>
        </div>
        <div>
          <Review service={service}></Review>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
