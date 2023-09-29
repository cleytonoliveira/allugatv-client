import { Button } from "../styles/Button.style";
import { Input } from "../styles/Input.style";
import { MainPage } from "../styles/MainPage";

export default function Checkout() {
  return (
    <MainPage>
      <div>
        <h1>Checkout</h1>
        <div>
          <h3>1. Delivery options</h3>
          <label htmlFor="fullname">
            Full name
            <Input
              type="text"
              name="name"
              id="fullname"
              placeholder="Full Name"
            />
          </label>
          <label htmlFor="address">
            Address
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
            />
          </label>
          <label htmlFor="city">
            City
            <Input type="text" name="city" id="city" placeholder="City" />
          </label>
          <label htmlFor="postal">
            Postal code
            <Input
              type="text"
              name="postal"
              id="postal"
              placeholder="Postal code"
            />
          </label>
        </div>
        <div>
          <h3>2. Shipping method</h3>
          <label htmlFor="standard">
            <input type="radio" name="delivery" id="standard" />
            Standard
          </label>
          <label htmlFor="express">
            <input type="radio" name="delivery" id="express" />
            Express
          </label>
        </div>
        <div>
          <h3>3. Method of payment</h3>
          <label htmlFor="credit">
            <input type="radio" name="payment" id="credit" />
            Credit card
          </label>
          <label htmlFor="paypal">
            <input type="radio" name="payment" id="paypal" />
            PayPal
          </label>
        </div>
      </div>
      <div>
        <h3>Your cart</h3>
        <Button>COMPLETE ORDER</Button>
      </div>
    </MainPage>
  );
}
