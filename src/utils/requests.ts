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

export const uploadFile = (fileName: string, fileToUpload: any) => {
  console.log("Uploading file ", fileName);
  // Getting the signed url
  axios(
    "https://e0nl13u2pf.execute-api.us-east-1.amazonaws.com/prod/postimage?fileName=" +
      fileName
  ).then((response) => {
    // Getting the url from response
    const url = response.data.fileUploadURL;

    axios({
      method: "PUT",
      url: url,
      data: fileToUpload,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log("SUCCESS UPLOADING FILE", fileName);
      })
      .catch((err) => {
        console.log("Error Occured while uploading the file", fileName);
      });
  });
};
