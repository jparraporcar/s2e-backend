<h1 align="center">Portfolio Use Only</h1>

> :warning: **Important Note**

This repository and its contents, including installation and deployment instructions, are provided for portfolio review and demonstration purposes only. While the repository is publicly viewable and its code can be executed for review purposes, no license is granted for any further use, distribution, or reproduction of the materials contained herein. Any such activities are prohibited without express permission from the repository owner. Please contact the owner for any questions or requests for use.

# s2e-backend

## Table of Contents
- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Deployment](#deployment)
- [APIs](#apis)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Contact](#contact)

## Description

The backend service for the s2e (StudyToEvolve) mobile application is presented [jparraporcar/s2e](https://github.com/jparraporcar/s2e).

## Prerequisites

Before starting, the following requirements are satisfied:
- The latest version of [Node.js and npm](https://nodejs.org/) is installed.
- The [Serverless framework](https://www.serverless.com/framework/docs/getting-started/) is installed.
- The [AWS CLI](https://aws.amazon.com/cli/) is installed.
- An AWS account with appropriate access rights is available.
- An API key from [Openai](https://openai.com/) is secured.

## Installation

### Procedure
    For the installation of s2e-backend, these steps are followed:
    1. The repository is cloned:
    ```
    git clone https://github.com/yourusername/s2e-backend.git
    ```

    2. The project directory is accessed:

    ```
    cd s2e-backend
    ```
    3. The dependencies are installed:

    ```
    npm install
    ```
    4. Environment variables are to be defined in a env.ts file in the root directory, as shown below:

    ```
    export const envVars = {
        STAGE: 'xxx',
        AWS_DEFAULT_REGION: 'xxx',
        OPENAI_API_KEY: 'xxx',
        ...process.env,
    }
    ```

## Deployment

For the backend deployment, the following command is executed:

```
serverless deploy
```

After deployment, the API endpoints are provided.

## API endpoints

The `s2e-backend` consists of two primary AWS Lambda functions enabling the necessary interactions with the OpenAI API:

1. **Get Course Index** - This function creates a course index based on user input from the frontend. A request is dispatched to the OpenAI API with relevant parameters. This Lambda function is invoked by a GET request at the `https://../indexCourse` endpoint obtained from deployment.

2. **Get Quiz Section** - This function fetches a quiz for a specific course section. A request is sent to the OpenAI API, and a quiz is constructed and returned based on the response. This Lambda function is triggered by a GET request at the `http://.../courseSectionQuiz` endpoint obtained from the deployment.

These 2 endpoints are to be used in the frontend code repo.

## Architecture

It leverages serverless architecture on AWS, employing services like AWS Lambda, API Gateway, and more to manage requests from the frontend application.

![Infrastructure Diagram](./diagram.jpg)

## Technologies

Various technologies and packages contribute to the implementation of the `s2e-backend`:

1. **Node.js** - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.

2. **TypeScript** - An open-source language that builds on JavaScript by adding static type definitions. This project utilized TypeScript version 4.9.5.

3. **AWS Lambda** - A serverless compute service that enables code execution without the requirement for provisioning or managing servers.

4. **Axios** - A promise-based HTTP client for the browser and Node.js, making it simple to send asynchronous HTTP requests.

5. **OpenAI API** - It interfaces with the OpenAI GPT-3.5 model for course index generation and quiz creation.

6. **Serverless Framework** - An open-source deployment framework allowing developers to construct and deploy auto-scaling, pay-per-execution, event-driven functions.

## Contact

If you want to contact me you can reach me at:

- **Name**: `Jordi Parra Porcar`
- **Email**: `jordiparraporcar@gmail.com`
- **LinkedIn**: [`Jordi Parra Porcar`](https://www.linkedin.com/in/jordiparraporcar/)


