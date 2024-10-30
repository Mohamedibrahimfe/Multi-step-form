const StepThree = (props) => {
  return (
    <section className="step-one">
      <header>
        <h1>Pick add-ons</h1>
        <p>Add-ons enhance your gaming experience</p>
      </header>
      <div className="choices">
        <div
          className={
            props.formData.addOns === "one" ? "choice active" : "choice"
          }
        >
          <input
            onChange={() =>
              props.setFormData({ ...props.formData, addOns: "one" })
            }
            type="checkbox"
          />

          <label>Online service</label>
          <h6>Access to multiplayer games</h6>
          <span>$1/mo</span>
        </div>
        <div
          className={
            props.formData.addOns === "two" ? "choice active" : "choice"
          }
        >
          <input
            onChange={() =>
              props.setFormData({ ...props.formData, addOns: "two" })
            }
            type="checkbox"
          />

          <label>Larger storage</label>
          <h6> Extra 1TB of cloud save</h6>
          <span>$2/mo</span>
        </div>
        <div
          className={
            props.formData.addOns === "three" ? "choice active" : "choice"
          }
        >
          <input
            onChange={() =>
              props.setFormData({ ...props.formData, addOns: "three" })
            }
            type="checkbox"
          />

          <label>Customizable Profile</label>
          <h6> Custom theme on your profile</h6>
          <span>$2/mo</span>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
