import image6 from "../../Assets/About/image6.png";
import image5 from "../../Assets/About/img5.jpg";
const Advertise = () => {
  return (
    <div className="carousel-item relative w-full mb-16">
      <div className="advertise-img">
        <img
          src={image5}
          alt=""
          className="lg:h-[570px] md:h-[450px] h-[350px] w-full object-cover rounded-none"
        />
      </div>
      <div className="absolute flex md:flex-row flex-col transform -translate-y-1/2 md:left-16 top-1/2">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-thin text-white pl-0">
            Be Gentle <br />
            With The Strongest..!
          </h1>
          <p className="md:text-2xl text-base text-white font-thin mt-7 mx-4">
            The outer part of the teeth that we see is the Enamel which is the
            hardest substance in the body. <br />
            Tooth consists of pulp in the innermost, encased by dentin and outer
            covering by enamel.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={image6} alt="" className="md:w-full w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default Advertise;
