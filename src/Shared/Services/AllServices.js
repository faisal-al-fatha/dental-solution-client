import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

import ServiceCard from "./ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useTitle('Services')

  useEffect(() => {
    fetch("https://dental-solution-server-beta.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center my-4">
        <h2 className="text-4xl font-thin text-black">
          >Our Services <span className="text-cyan-500">and Specialities</span>
        </h2>
        <p className="my-4">Our Umbrella of Dental Treatments </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    
    </div>
  );
};

export default AllServices;
