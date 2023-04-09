import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  let data;
  const recaptchaRef = useRef(),
    handleChange = (token) => {
      if (!token) {
        return;
      }
      recaptchaRef.current.reset();
      data["token"] = token;

      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
        });
    },
    handleSubmit = async (e) => {
      e.preventDefault();

      const form = e.target;
      data = {
        email: form.email.value,
        message: form.message.value,
      };

      form.reset();
      recaptchaRef.current.execute();
    };

  return (
    <div className="container">
      <p className="font-bold text-4xl">Contact</p>
      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey="6LfXTAsgAAAAALMeR-8E52S4Mt1dVM3ZHgLObkAK"
            onChange={handleChange}
          />
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">Email</label>
              <input
                type="email"
                name="email"
                className="mt-2 secondary-bg secondary-text shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">
                <div className="flex align-items">
                  Message or inquiry
                  <span className="ml-auto opacity-75">
                    Max. 500 characters
                  </span>
                </div>
              </label>
              <textarea
                maxLength="500"
                rows="4"
                type="text"
                name="message"
                className="mt-2 secondary-bg secondary-text shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <div className="flex justify-end py-4">
            <button className="w-1/4 p-4 h-full rounded-xl tertiary-bg tertiary-text">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
