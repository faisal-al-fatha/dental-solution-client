
const AddServise = () => {
    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.photoURL.value;
       
        const ratings = form.ratings.value;
        const details = form.details.value;
      
    
      const service = {
        name,
        price,
        image,
        ratings,
        details
    }
    fetch('http://localhost:5000/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        alert('Service Added Successfully')
                        form.reset();
                        
                    }
                })
                .catch(er => console.error(er));
            }

  return (
    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
      <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
        Add A Service 
      </h3>
      <form onSubmit={handleAddService}>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="name" className="inline-block mb-1 font-medium">
            Service Name
          </label>
          <input
            placeholder="Dental......"
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="photoURL" className="inline-block mb-1 font-medium">
            Service Photo URL
          </label>
          <input
            placeholder="https//.............."
            type="photoURL"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="photoURL"
            name="photoURL"
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="price" className="inline-block mb-1 font-medium">
            Price
          </label>
          <input
            placeholder="Price"
            required
            type="number"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="price"
            name="price"
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="ratings" className="inline-block mb-1 font-medium">
            Ratings
          </label>
          <input
            placeholder="Ratings out of 5"
            required
            type="number"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            id="ratings"
            name="ratings"
          />
        </div>
        <label htmlFor="ratings" className="inline-block mb-1 font-medium">
            Service details
          </label>
        <textarea
                name="details"
                className="textarea textarea-bordered h-24 w-full mb-5 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                placeholder="Add Some Service Details"
                required
              ></textarea>
        <div className="mt-4 mb-2 sm:mb-4">
          <button
            type="submit"
            className="w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded-none shadow-md btn btn-outline bg-cyan-500 text-black hover:text-white  hover:bg-cyan-700 focus:shadow-outline focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServise;
