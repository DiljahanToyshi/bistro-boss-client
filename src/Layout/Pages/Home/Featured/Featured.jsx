import Title from '../SectionTitle/Title';
import './Featured.css';
import featuredImg from '../../../../assets/home/featured.jpg'
const Featured = () => {
    return (
      <div className="featured-item bg-fixed text-white pt-8 my-20">
        <Title  subHeading="check it out" heading="Featured Item"></Title>
        <div className="md:flex bg-slate-500 bg-opacity-60 gap-8 justify-center items-center pb-20 pt-12 px-36 ">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-11">
            <p>Aug 20,2019</p>
            <p className="uppercase">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              reiciendis, molestias tenetur architecto asperiores impedit hic,
              eos velit deserunt rerum sint perspiciatis commodi ut! Ut officiis
              ratione tempora asperiores rem. Quasi iure soluta natus ipsam
              velit rerum odio cumque.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
          </div>
        </div> 
      </div>
    );
};

export default Featured;