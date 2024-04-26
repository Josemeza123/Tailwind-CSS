import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

const Home = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      {items?.map((item) => (
        <Card data={item} key={item.id}/>
      ))}
    </Layout>
  );
};

export default Home;
