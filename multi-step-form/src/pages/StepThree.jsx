import { useState, useEffect } from "react";
const StepThree = ({ setFormData, formData }) => {
  const [isChecked, setIsChecked] = useState([false, false, false]);

  console.log(isChecked);

  const handleClick = (index) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
  };
  const setData = () => {
    setFormData({
      ...formData,
      addOns: isChecked,
    });
  };
  useEffect(() => {
    setData();
  }, [isChecked]);
  return (
    <section className="step-one">
      <header>
        <h1>Pick add-ons</h1>
        <p>Add-ons enhance your gaming experience</p>
      </header>
      <div className="choices">
        <div
          onClick={() => handleClick(0)}
          className={isChecked[0] ? "choice active" : "choice"}
        >
          <input checked={isChecked[0]} type="checkbox" />

          <label>Online service</label>
          <h6>Access to multiplayer games</h6>
          <span>$1/mo</span>
        </div>
        <div
          onClick={() => handleClick(1)}
          className={isChecked[1] ? "choice active" : "choice"}
        >
          <input checked={isChecked[1]} type="checkbox" />

          <label>Larger storage</label>
          <h6> Extra 1TB of cloud save</h6>
          <span>$2/mo</span>
        </div>
        <div
          onClick={() => handleClick(2)}
          className={isChecked[2] ? "choice active" : "choice"}
        >
          <input checked={isChecked[2]} type="checkbox" />

          <label>Customizable Profile</label>
          <h6> Custom theme on your profile</h6>
          <span>$2/mo</span>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
