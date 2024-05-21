import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const { t } = useTranslation();

  const getLocalTime = () =>
    new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Mexico_City",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    setData({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    });

    form.reset();
    recaptchaRef.current.execute();
  };

  const [error, setError] = useState("");

  const handleChange = (token) => {
    if (!token) return;

    recaptchaRef.current.reset();
    data["token"] = token;

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.success) {
          setError(data.message);
        }
        setError(null);
      })
      .catch((error) => {
        setError(error.message || "An error occurred. Please try again.");
      });
  };

  const [time, setTime] = useState(getLocalTime());
  const [data, setData] = useState();

  const recaptchaRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getLocalTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-secondary text-secondary-text rounded-xl p-6">
      <h1 className="text-md uppercase font-bold">{t("contact")}</h1>
      <span className="text-xs font-bold">{t("time", { time })}</span>
      {error && (
        <div className="bg-red-500 rounded-xl p-4 text-white my-2">{error}</div>
      )}
      <form onSubmit={handleSubmit}>
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6LfXTAsgAAAAALMeR-8E52S4Mt1dVM3ZHgLObkAK"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t("name")}
          name="name"
          required
          className="w-full p-2 rounded-lg mt-2 bg-tertiary text-tertiary-text"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="w-full p-2 rounded-lg mt-2 bg-tertiary text-tertiary-text"
        />
        <textarea
          name="message"
          placeholder={t("message")}
          required
          className="w-full p-2 rounded-lg mt-2 bg-tertiary text-tertiary-text"
        ></textarea>
        <button className="w-full p-2 rounded-lg mt-2 bg-tertiary text-tertiary-text">
          {t("send")}
        </button>
      </form>
    </div>
  );
};

export default Contact;
