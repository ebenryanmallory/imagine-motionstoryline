# Imagine -- a generative AI tool for MotionStoryline

Imagine MotionStoryline is a dynamic web project leveraging Cloudflare Workers for serverless functions, TailwindCSS for styling, and Hono as a lightweight web framework. This project is designed to showcase the integration of various technologies for creating responsive and interactive web applications.

## Getting Started

To get started with Imagine MotionStoryline, follow these steps after cloning the project from GitHub.

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or later)
- Yarn or NPM package manager

### Installation

1. **Install Dependencies**

   Navigate to the project's root directory and run the following command to install the necessary dependencies:

```
   yarn install
```

2. **Environment Variables**

  Rename wrangler-example.toml to wrangler.toml and add your own values for your Cloudflare project.

   This project may require setting up environment variables. If applicable, create a `.env` file in the root directory and populate it with a STABILITY_API_KEY. You will need to get this from Stability AI. You will need to set up dotenv to access this variable in local development. You can also set a secret in your Cloudflare Worker and use the --remote flag.

### Running the Project

- **Development Mode**

  To run the project in development mode, use the following command:

```
yarn dev
```

  This command prebuilds the necessary assets, compiles TailwindCSS, and starts the Cloudflare Workers development server.

- **Production Build and Deployment**

  Before deploying, ensure you have configured your Cloudflare Workers account and have `wrangler` CLI set up correctly.

  - To deploy the project to Cloudflare Workers, run:

```
yarn deploy
```

  This command will build the project and deploy it using Wrangler.

### Additional Scripts

- **TailwindCSS Compilation**

  To manually compile TailwindCSS:

```
yarn tailwind
```

This compiles the TailwindCSS file from `./tailwind.css` to `./assets/static/tailwind.css`.

- **Prebuild Script**

  The prebuild script can be run separately to prepare the project's dashboard:

```
yarn prebuild
```


### Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to discuss proposed changes or enhancements.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

---

This README provides a basic overview of how to get started with Imagine MotionStoryline. For more detailed documentation on the technologies used, refer to their respective official documentation.