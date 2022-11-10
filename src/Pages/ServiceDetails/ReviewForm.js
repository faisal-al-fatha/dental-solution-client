import { useContext } from 'react';
import { AuthContext } from '../../Layout/Main';

const ReviewForm = ({ service }) => {
    const { name, _id } = service;
    const { user } = useContext(AuthContext);
    const handleSubmitReview = event =>{
        event.preventDefault();
        const form = event.target;
        const reviewer = form.name.value;
        const email = user?.email;
        const userImage = user?.photoURL;
        const ratings = form.ratings.value;
        const message = form.review.value;
      
    
      const review = {
        service: _id,
        serviceName: name ,
        ratings: ratings ,
        customer: reviewer,
        email,
        userImage,
        message
    }
    fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        alert('Review Added Successfully')
                        form.reset();
                        
                    }
                })
                .catch(er => console.error(er));
    
    }
    return (
        <div>
          <h3 className='text-2xl text-center my-10'>Please submit a review of your experience on this service</h3>
            <form onSubmit={handleSubmitReview}>
              <div className="grid grid-cols-1 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="input input-ghost w-full  input-bordered"
                />
                <input
                  type="number"
                  name="ratings"
                  placeholder="Give your ratings out of 5"
                  className="input input-ghost w-full  input-bordered"
                  required
                />
                <input
                  name="email"
                  type="text"
                  placeholder="Your email"
                  defaultValue={user?.email}
                  className="input input-ghost w-full  input-bordered"
                  readOnly
                />
              </div>
              <textarea
                name="review"
                className="textarea textarea-bordered h-24 w-full my-5"
                placeholder="Your Review"
                required
              ></textarea>
              <input
                className="btn bg-cyan-500 text-black"
                type="submit"
                value="Submit your review"
              />
            </form>
        </div>
    );
};

export default ReviewForm;