const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-rammina",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://j8c49uamw6.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_bA5vGa1GW",
    APP_CLIENT_ID: "36o49ge8isdgtdlrjs1e9iip16",
    IDENTITY_POOL_ID: "us-east-1:860df5ce-ecb9-459f-a9c9-e36ecc0ce6a4",
  },
};

export default config;
