import React from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import Drawer from "@mui/material/Drawer";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

function App() {
  const { products } = useSelector((store) => store.basket);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer open={true} className="drawer" anchor="right">
          {products &&
            products.map((product) => {
              return (
                <div className="flex-row" style={{padding: '25px'}}>
                  <img src={product.image} width={50} height={50} style={{ marginRight: '10px'}}/>
                  <p style={{ width: '320px'}} className="app-product-title">{product.title} ({product.count})</p>
                  <p>{product.price}</p>
                </div>
              );
            })}
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
