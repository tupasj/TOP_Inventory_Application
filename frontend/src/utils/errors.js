const axiosErrorHandler = (error) => {
  if (error.response) {
    console.log(
      "Axios error: The request was made and the server responded with a status code."
    );
    console.log("error.response.data: ", error.response.data);
    console.log("error.response.status: ", error.response.status);
    console.log("error.response.headers: ", error.response.headers);
  } else if (error.request) {
    console.log(
      "Axios error: The request was made but no response was received"
    );
    console.log("error.request: ", error.request);
  } else {
    console.log(
      "Axios error: Something happened in setting up the request that triggered an Error"
    );
    console.log("error.message: ", error.message);
  }
};

export { axiosErrorHandler };
