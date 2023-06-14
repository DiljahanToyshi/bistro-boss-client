import { useState } from 'react';
import Cover from '../Layout/Pages/Shared/Cover/Cover';
import orderCover from '../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from '../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';


const Order = () => {
  const categories = ["Soup", "Pizzas", "Drinks", "salads", "Dessert"];

const { category } = useParams();
const initialIndex = categories.indexOf(category);
const [tabIndex, setTabindex] = useState(initialIndex);

const [menu] = useMenu();
      const desserts = menu.filter((item) => item.category === "dessert");
      const salads = menu.filter((item) => item.category === "salad");
      const soups = menu.filter((item) => item.category === "soup");
      const pizzas = menu.filter((item) => item.category === "pizza");
      const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro | Order</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover title="Order your food" img={orderCover}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)} >
        <TabList>
          <Tab>Soup</Tab>
          <Tab>Pizzas</Tab>
          <Tab>Drinks</Tab>
          <Tab>salads</Tab>
          <Tab>Dessert</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;