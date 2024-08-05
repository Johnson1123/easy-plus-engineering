import { text_lg_bold } from "../../styles/utils";
import ContactForm from "../Contact.Form";
import ContactAddress from "../Contact.Address";

function ContactSection() {
  return (
    <div className="flex flex-col items-center bg-primary py-5 md:min-h-[60vh] lg:h-[100vh] justify-center gap-5">
      <p className={`${text_lg_bold}`}>Let's Connect</p>
      <div className="w-[90%] md:w-[85%]  lg:w-[60%] flex flex-col md:flex-row gap-10 justify-between py-7 px-5  mt-5 md:mt-10 bg-[#fff] rounded-md">
        <ContactForm />
        <ContactAddress />
      </div>
    </div>
  );
}

export default ContactSection;
