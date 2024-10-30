import { useNavigate } from "react-router-dom";
const StepFour = ({ setFormData, formData }) => {
  const navigate = useNavigate();
  return (
    <section className="step-one">
      <header>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
      </header>
      <div className=" summary">
        <div className="plan">
          <h3>
            {formData.plan}{" "}
            <span>{formData.billing ? "(yearly)" : "(monthly)"}</span>
          </h3>
          <p>$9/mo</p>
          <h5 className="change" onClick={() => navigate("/stepthree")}>
            Change
          </h5>
        </div>
        <hr></hr>
        <div className="addons">
          <p>
            <span>{formData.addOns[0] ? "Online service" : ""}</span>
            +$1/mo
          </p>
          <p>
            <span>{formData.addOns[1] ? "Larger storage" : ""}</span>+$2/mo
          </p>
          <p>
            <span>{formData.addOns[2] ? "Customizable profile" : ""}</span>
            +$2/mo
          </p>
        </div>
      </div>
      <div className="total">
        <p>
          <span>Total (per month)</span>
        </p>

        <p className="total-price">
          +$
          {(formData.plan === "arcade"
            ? 9
            : formData.plan === "advanced"
            ? 12
            : formData.plan === "pro"
            ? 15
            : 0) +
            ((formData.addOns[0] ? 1 : 0) +
              (formData.addOns[1] ? 2 : 0) +
              (formData.addOns[2] ? 2 : 0)) *
              (formData.billing ? 10 : 1)}
          {formData.billing ? "/yr" : "/mo"}
        </p>
      </div>
    </section>
  );
};

export default StepFour;
