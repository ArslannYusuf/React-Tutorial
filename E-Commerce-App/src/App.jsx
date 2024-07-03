import React, { useEffect } from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import Drawer from "@mui/material/Drawer";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer } from "./redux/slices/basketSlice";

function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateBasket())
  },[])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer open={drawer} onClose={() => {dispatch(setDrawer())}} className="drawer" anchor="right">
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                <div className="drawer-product" style={{padding: '20px'}}>
                  <img src={product.image} width={50} height={50} style={{ marginRight: '10px'}}/>
                  <p style={{ width: '320px', marginRight: '10px'}} className="app-product-title">{product.title} ({product.count})</p>
                  <p style={{ fontWeight: 'bold', width: '60px'}}>{product.price} ₺</p>
                  <button className="drawer-delete-btn">Sil</button>
                </div>

                
                </div>
              );
            })}
           <div>
                  <p className="app-total-amount"  > Toplam tutar : {totalAmount} ₺</p>
                </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
