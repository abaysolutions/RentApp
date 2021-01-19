import { FormFields } from "../Types/FormTypes";

export const sendRegistrationForm = (form: any) => {
  return fetch(
    "https://e0nl13u2pf.execute-api.us-east-1.amazonaws.com/prod/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form }),
    }
  ).then((data) => console.log(data.status));
};
