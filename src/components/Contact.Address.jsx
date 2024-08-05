import {
  text_lg_medium,
  text_md_medium,
  text_sm_bold,
  text_sm_medium,
} from "../styles/utils";

function ContactAddress() {
  return (
    <div className="w-[90%] md:w-[45%]">
      <p className={text_lg_medium}>Contact Address</p>
      <div className="">
        <div className="mt-3">
          <p className={text_md_medium}>Primary Address</p>
          <div className="flex flex-col gap-3 mt-3">
            <p className="flex gap-2">
              <span className={text_sm_bold}>Address: </span>
              <span className={text_sm_medium}>
                Plot FD 262, Gift Estate, Airport Road, Abuja.
              </span>
            </p>
            <p className="">
              <span className={text_sm_bold}>State: </span>
              <span className={text_sm_medium}>FCT</span>
            </p>
            <p className="">
              <span className={text_sm_bold}>Country: </span>
              <span className={text_sm_medium}>Nigeria,</span>
            </p>
            <p className="">
              <span className={text_sm_bold}>Phone: </span>
              <span className={text_sm_medium}>09076524078</span>
            </p>
            <p className="">
              <span className={text_sm_bold}>Email: </span>
              <span className={text_sm_medium}>
                easyplusconstruction@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className={text_md_medium}>Other Address</p>
          <div className="flex flex-col gap-3 mt-3">
            <p className="flex gap-2">
              <span className={text_sm_bold}>Address: </span>
              <span className={text_sm_medium}>
                Plot FD 262, Gift Estate, Airport Road, Abuja.
              </span>
            </p>
            <p className="">
              <span className={text_sm_bold}>State: </span>
              <span className={text_sm_medium}>Lagos</span>
            </p>
            <p className="">
              <span className={text_sm_bold}>Phone: </span>
              <span className={text_sm_medium}>09076524078</span>
            </p>
            <p className="">
              <span className={text_sm_bold}>Email: </span>
              <span className={text_sm_medium}>
                easyplusconstruction@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAddress;
