import "./BillingCheckout.scss";
import BillingAddress from "./Billing-address";
import Order from "./Order";

function BillingCheckout() {
  return (
    <main>
      <section className="billing-checkout">
        <div className="container">
          <div className="billing-checkout-main">
            <BillingAddress />

            <Order />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BillingCheckout;
