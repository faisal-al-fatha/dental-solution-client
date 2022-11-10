import { useLoaderData } from 'react-router-dom';
const Update = () => {
    const review = useLoaderData()
    const { serviceName, ratings, message, _id } =
    review;
    const handleUpdateReview = event =>{
        event.preventDefault();
        const form = event.target;
        const ratings = form.ratings.value;
        const message = form.review.value;

        const updatedReview = {
            ratings, message
        }

        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview )
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('Review updated')
            }
            
        })
    
    }
    return (
        <div>
          <h3 className='text-2xl text-center my-10'>Please submit a review of your experience on this service</h3>
            <form onSubmit={handleUpdateReview}>
              <div className="grid grid-cols-1 gap-4">
                <input
                  name="name"
                  type="text"
                  defaultValue={serviceName}
                  readOnly
                  placeholder="Service Name"
                  required
                  className="input input-ghost w-full  input-bordered"
                />
                <input
                  type="number"
                  name="ratings"
                  defaultValue={ratings}
                  placeholder="Give your ratings out of 5"
                  className="input input-ghost w-full  input-bordered"
                  required
                />
              </div>
              <textarea
                name="review"
                defaultValue={message}
                className="textarea textarea-bordered h-24 w-full my-5"
                placeholder="Your Review"
                required
              ></textarea>
              <input
                className="btn bg-cyan-500 text-black"
                type="submit"
                value="Update your review"
              />
            </form>
        </div>
    );
};

export default Update;