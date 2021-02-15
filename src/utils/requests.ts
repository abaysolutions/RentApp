import axios from "axios";

export const sendRegistrationForm = async (form: string) => {
  const data = await fetch(
    "https://e0nl13u2pf.execute-api.us-east-1.amazonaws.com/prod/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form }),
    }
  );
  return console.log(data.status);
};
// export const sendImages = async (files: File[]) => {
//   const data = await fetch(
//     "https://e0nl13u2pf.execute-api.us-east-1.amazonaws.com/prod/postimage",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify({ form }),
//     }
//   );
//   return console.log(data.status);
// };

export const sendImages = async (files: any) => {
  axios.post(
    "https://e0nl13u2pf.execute-api.us-east-1.amazonaws.com/prod/postimage",
    files,
    {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        // "Access-Control-Allow-Origin": "*",
      },
    }
  );
};
