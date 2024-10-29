const StepFour = () => {
  return (
    <section className="step-one">
      <header>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </header>
      <div className="">
        <div>
          <h3>
            Arcade <span>Monthly</span>
          </h3>
          <p>$90/yr</p>
        </div>
        <hr></hr>
        <div>
          <p>
            <span>Online service</span>+$1/mo
          </p>
          <p>
            <span>Larger storage</span>+$2/mo
          </p>
        </div>
        <div className="total">
          <p>
            <span>Total (per month)</span>
          </p>
          <p>$9/mo</p>
        </div>
      </div>
      <button>Confirm</button>
      <button>Go Back</button>
    </section>
  );
};

export default StepFour;
