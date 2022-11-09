import image4 from "../../../Assets/About/image4.jpg";
const Stats = () => {
    return (
        <section className=" body-font">
  <div className="container py-16 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 font-thin text-black">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-thin text-4xl mb-2 text-gray-900">Dental Solution in Numbers</h1>
        <div className="leading-relaxed text-2xl">Some Statistics</div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">1.2K</h2>
        <p className="leading-relaxed">Patients a year</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">18</h2>
        <p className="leading-relaxed">Year Experiences</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">6k+</h2>
        <p className="leading-relaxed">Happy Patients</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">100%</h2>
        <p className="leading-relaxed">Quality</p>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img className="object-cover object-center w-full" src={image4} alt="stats"/>
    </div>
  </div>
</section>
    );
};

export default Stats;