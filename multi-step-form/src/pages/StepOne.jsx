import { useState } from "react";
const StepOne = () => {
  return (
    <section className="step-one">
      <header>
        <h1>personal info</h1>
        <p>please provide your name, email address, and phone number.</p>
      </header>

      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" placeholder="e.g. Stephen King" id="name" />
        </div>
        <div>
          <label for="email">Email Address</label>
          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
          />
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <input type="tel" placeholder="e.g. +1 234 567 890" id="phone" />
        </div>
      </form>
    </section>
  );
};

export default StepOne;
