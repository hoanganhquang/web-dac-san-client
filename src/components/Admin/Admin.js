import "./Admin.scss";

import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import Statistics from "./Statistics/Statistics";
import Product from "./Product/Product";
import Order from "./Order/Order";
import { useEffect } from "react";

function Admin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="admin">
        <div className="container">
          <div className="admin-main">
            <SideBar />

            <div className="admin-content">
              <Routes>
                <Route path="statistics" element={<Statistics />} />
                {/* <Route path="categories" element={<Category />} /> */}
                <Route path="products" element={<Product />} />
                <Route path="orders" element={<Order />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Admin;
