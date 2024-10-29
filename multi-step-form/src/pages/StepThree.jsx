const StepThree = () => {
  return (
    <section className="step-one">
      <header>
        <h1>personal info</h1>
        <p>please provide your name, email address, and phone number.</p>
      </header>
      <div className="choices">
        <div>
          <input type="checkbox" />
          <label>Online service</label>
          <h6>access to multiplayer games</h6>
          <span>$1/mo</span>
        </div>
        <div>
          <input type="checkbox" />
          <label>Larger storage</label>
          <h6> extra 1TB of cloud save</h6>
          <span>$2/mo</span>
        </div>
        <div>
          <input type="checkbox" />
          <label>Customizable Profile</label>
          <h6> Custom theme on your profile</h6>
          <span>$2/mo</span>
        </div>
      </div>
      <button>Next Step</button>
      <button>Go Back</button>
    </section>
  );
};

export default StepThree;
