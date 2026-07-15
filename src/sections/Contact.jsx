import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_ewz5247",
        "template_3gwhp0t",
        {
          from_name: formData.name,
          to_name: "Nidio",
          from_email: formData.email,
          to_email: "nidio.tilman24@gmail.com",
          message: formData.message,
        },
        "z_kIPtEPM4APe5Y0b"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", t.contact.success);
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", t.contact.error);
    }
  };

  return (
    <section id='contact' className="relative flex items-center c-space section-spacing">
      <Particles className="absolute inset-0 -z-50" quantity={100} ease={80} color={"#ffffff"} refresh />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">{t.contact.title}</h2>
          <p className="font-normal text-neutral-400">{t.contact.description}</p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">{t.contact.name.label}</label>
            <input
              id="name" name="name" type="text"
              className="field-input field-input-focus"
              placeholder={t.contact.name.placeholder}
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">{t.contact.email.label}</label>
            <input
              id="email" name="email" type="email"
              className="field-input field-input-focus"
              placeholder={t.contact.email.placeholder}
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">{t.contact.message.label}</label>
            <textarea
              id="message" name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder={t.contact.message.placeholder}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? t.contact.send : t.contact.sending}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
