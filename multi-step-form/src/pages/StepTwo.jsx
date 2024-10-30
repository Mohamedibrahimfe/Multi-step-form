const StepTwo = (props) => {
  console.log(props.formData);
  return (
    <section className="step-one ">
      <header>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <div className="cards-container">
        <div
          onClick={() =>
            props.setFormData({ ...props.formData, plan: "arcade" })
          }
          className={props.formData.plan === "arcade" ? "card active" : "card"}
        >
          <img src="/assets/images/icon-arcade.svg" alt=""></img>
          <h3>arcade</h3>
          <p>$9/mo</p>
        </div>
        <div
          onClick={() =>
            props.setFormData({ ...props.formData, plan: "advanced" })
          }
          className={
            props.formData.plan === "advanced" ? "card active" : "card"
          }
        >
          <img src="/assets/images/icon-advanced.svg" alt=""></img>
          <h3>advanced</h3>
          <p>$12/mo</p>
        </div>
        <div
          onClick={() => props.setFormData({ ...props.formData, plan: "pro" })}
          className={props.formData.plan === "pro" ? "card active" : "card"}
        >
          <img src=" /assets/images/icon-pro.svg" alt=""></img>
          <h3>pro</h3>
          <p>$15/mo</p>
        </div>
      </div>
      <div className="toggle-container">
        <span>Monthly</span>
        <label class="switch">
          <input
            value={props.formData.billing}
            onChange={(e) =>
              props.setFormData({
                ...props.formData,
                billing: e.target.checked,
              })
            }
            type="checkbox"
          />
          <span class="slider round"></span>
        </label>
        <span>Yearly</span>
      </div>
    </section>
  );
};

export default StepTwo;
