import "./formPanel.scss";
import { useContext } from "react";

import FormStep1 from "components/FormPanel/FormStep1";
import FormStep2 from "components/FormPanel/FormStep2";
import FormStep3 from "components/FormPanel/FormStep3";

import FormDataContext from "contexts/FormDataContext";



export default function FormPanel() {
  //Context
  const { step } = useContext(FormDataContext);

  const stepDisplay = () => {
    if (step === 0) {
      return <FormStep1 />;
    } else if (step === 1) {
      //之後在totalPrice的部分要調整
      return <FormStep2 />;
    } else if (step === 2) {
      return <FormStep3 />;
    }
  };

  return (
    <div className="form-panel col col-12">
      <div className="form-container">{stepDisplay()}</div>
    </div>
  );
}
