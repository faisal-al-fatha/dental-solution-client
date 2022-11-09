import "./Banner.css";

const BannerSlide = ({ slide }) => {
  const { image, id, previous, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="lg:h-[870px] md:h-[650px] h-[500px] w-full object-cover rounded-none" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-thin text-white">
          Make Your  <span className="text-cyan-500">Dental</span>  <br />
          Experience a Lot <br />
          Brighter
        </h1>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 md:w-2/5 left-24 top-1/2">
        <p className="md:text-2xl text-base font-thin text-white text-left">
            From simple procedures to complex surgeries, <br />
          With best facilities and better equipments, <br />
          you are in  safe hands
        </p>
      </div>
      <div className="absolute flex items-center justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <p className="text-2xl text-white mr-3  font-thin">Book An</p>
        <button className="btn btn-outline bg-cyan-500 hover:bg-cyan-700 text-black"> Apointment   ❯</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${previous}`} className="btn btn-circle bg-cyan-500">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-cyan-500">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerSlide;
