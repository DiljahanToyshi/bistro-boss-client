import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../../assets/menu/menu-bg.png"
import DessertImage from "../../../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../../assets/menu/pizza-bg.jpg"
import saladImage from "../../../../assets/menu/salad-bg.jpg"
import soupImage from "../../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../../hooks/useMenu";
import Title from "../../Home/SectionTitle/Title";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
    const [menu] = useMenu();
      const desserts = menu.filter((item) => item.category === "dessert");
      const salads = menu.filter((item) => item.category === "salad");
      const soups = menu.filter((item) => item.category === "soup");
      const pizzas = menu.filter((item) => item.category === "pizza");
      const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {/* main cover */}
      <Cover img={menuImage} title="Our Menu"></Cover>
      <section>
        <Title heading="TOdays Offer" subHeading="Dont't Miss"></Title>
      </section>
      {/* offered menu items  */}
      <MenuCategory items={offered} ></MenuCategory>

      {/* dessert menu items  */}
      <MenuCategory
        items={desserts}
        title="Dessert"
        Img={DessertImage}
      ></MenuCategory>
      {/* soup menu items  */}
      <MenuCategory items={soups} title="Soup" Img={soupImage}></MenuCategory>
      {/* salad menu items  */}
      <MenuCategory
        items={salads}
        title="Salad"
        Img={saladImage}
      ></MenuCategory>
      {/* pizza menu items  */}
      <MenuCategory
        items={pizzas}
        title="pizza"
        Img={pizzaImage}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
