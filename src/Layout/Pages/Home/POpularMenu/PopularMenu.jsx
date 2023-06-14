import Title from "../SectionTitle/Title";
import MenuItem from "../../Shared/MenuItem";
import { Link } from "react-router-dom";
import useMenu from "../../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');
    
    return (
      <div>
        <section>
          <Title heading="From our Menu" subHeading="Popular Item"></Title>
        </section>
        <div className="grid md:grid-cols-2 gap-20">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <Link>
            {" "}
            <button className=" btn btn-outline  mt-4">View Full Menu</button>
          </Link>{" "}
        </div>
      </div>
    );
};

export default PopularMenu;