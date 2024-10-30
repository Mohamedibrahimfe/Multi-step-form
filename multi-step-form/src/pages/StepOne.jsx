const StepOne = (props) => {
  console.log(props.formData.name);
  return (
    <section className="step-one">
      <header>
        <h1>personal info</h1>
        <p>please provide your name, email address, and phone number.</p>
      </header>

      <form>
        <div>
          <label for="name">Name</label>
          <input
            value={props.formData.name || ""}
            onChange={(e) => {
              props.setFormData({ ...props.formData, name: e.target.value });
            }}
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
          />
        </div>
        <div>
          <label for="email">Email Address</label>
          <input
            value={props.formData.email}
            onChange={(e) => {
              props.setFormData({ ...props.formData, email: e.target.value });
            }}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
          />
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <input
            value={props.formData.phone}
            onChange={(e) => {
              props.setFormData({ ...props.formData, phone: e.target.value });
            }}
            type="tel"
            placeholder="e.g. +1 234 567 890"
            id="phone"
          />
        </div>
      </form>
    </section>
  );
};

export default StepOne;
