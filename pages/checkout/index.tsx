import { Button } from "../components/styles/Button.style";

export default function Checkout() {
  return (
    <div>
      <div>
        <h1>Checkout</h1>
        <div>
          <h3>1. Delivery options</h3>
          <label htmlFor="fullname">
            Full name
            <input type="text" name="name" id="fullname" autoFocus />
          </label>
          <label htmlFor="address">
            Address
            <input type="text" name="address" id="address" />
          </label>
          <label htmlFor="city">
            City
            <input type="text" name="city" id="city" />
          </label>
          <label htmlFor="postal">
            Postal code
            <input type="text" name="lastname" id="postal" />
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
    </div>
  );
}
