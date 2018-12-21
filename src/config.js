const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1qzl2xswlz285"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9cuormmjuc.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_n0Y5gnjw5",
    APP_CLIENT_ID: "4s3a1jf2e92vavnebpi9ft0o69",
    IDENTITY_POOL_ID: "us-east-1:719ebd73-b3d3-4270-9e49-39839564b2d1"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1vrn1nppnd9w9"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://67wjz3d51a.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ukRfpG6TG",
    APP_CLIENT_ID: "6cnvajipifh3uls9kbbl5cgtjb",
    IDENTITY_POOL_ID: "us-east-1:719ebd73-b3d3-4270-9e49-39839564b2d1"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
