import { useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const hcaptchaRef = useRef(),
    onHCaptchaChange = (token) => {
        if(!token) {
            return;
        }
        hcaptchaRef.current.reset();
    },
    sendMail = async (e) => {
      e.preventDefault();
      const form = e.target,
        info = {
          firstName: form["first-name"].value,
          lastName: form["last-name"].value,
          email: form.email.value,
          message: form.message.value,
          subject: form.subject.value,
        };

      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          form.reset();
        });
    };

  return (
    <div className="container">
      <p className="font-bold text-4xl">Contact</p>
      <div className="p-6">
        <form onSubmit={sendMail}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                name="first-name"
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <HCaptcha
              id="test"
              size="invisible"
              ref={hcaptchaRef}
              sitekey={process.env["HCAPTCHA_SITE_KEY"]}
              onVerify={onHCaptchaChange}
            />
          </div>
          <div className="flex justify-end py-4">
            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-xl text-white py-2 px-4 rounded-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
