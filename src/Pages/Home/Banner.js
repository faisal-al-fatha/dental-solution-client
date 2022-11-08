import image1 from '../../Assets/Banner/image1.jpg';
import image2 from '../../Assets/Banner/image2.jpg';
import image3 from '../../Assets/Banner/image3.jpg';
import image4 from '../../Assets/Banner/image4.jpg';
import image5 from '../../Assets/Banner/image5.jpg';

import BannerSlide from './BannerSlide';

const bannerData = [
    {
        image: image1,
        previous: 5,
        id: 1,
        next: 2
    },
    {
        image:image2,
        previous: 1,
        id: 2,
        next: 3
    },
    {
        image: image3,
        previous: 2,
        id: 3,
        next: 4
    },
    {
        image:image4,
        previous: 3,
        id: 4,
        next: 5
    },
    {
        image: image5,
        previous: 4,
        id: 5,
        next: 1
    }
   
]

const Banner = () => {
    return (
        <div className="carousel w-full py-6">
            {
                bannerData.map(slide => <BannerSlide
                    key={slide.id}
                    slide={slide}
                ></BannerSlide>)
            }
            
        </div>
    );
};

export default Banner;