const StepTwo = () => {
  return (
    <section className="step-one ">
      <header>
        <h1>personal info</h1>
        <p>please provide your name, email address, and phone number.</p>
      </header>

      <div className="cards-container">
        <div className="card">
          <img src="/assets/images/icon-arcade.svg"></img>
          <h3>arcade</h3>
          <p>$9/mo</p>
        </div>
        <div className="card">
          <img src="/assets/images/icon-advanced.svg"></img>
          <h3>advanced</h3>
          <p>$12/mo</p>
        </div>
        <div className="card">
          <img src=" /assets/images/icon-pro.svg"></img>
          <h3>pro</h3>
          <p>$15/mo</p>
        </div>
      </div>
      <div>
        <span>Monthly</span>
        <input type="checkbox" />
        <span>Yearly</span>
      </div>
      <button>Next Step</button>
      <button>Go Back</button>
    </section>
  );
};

export default StepTwo;
