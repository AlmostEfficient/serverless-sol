Serverless function to send SOL to a given address. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Serverless functions are located in the `pages/api` directory.

Create a `.env` file and add your raw secret key byte array, like this:
  
  ```bash
  SOLANA_SECRET_KEY=183,31,32,44
  ```

Your actual array will be much longer, obviously.

## Adding a new function
Create a new file in the `pages/api` directory. The name of the file will be the name of the function. Anything that you can do in a regular Node.js script or React app, you can do in this function. 

## Serverless vs Edge
Serverless functions are run on-demand, expect a cold start time of 1-2 seconds. This makes them cheaper. Edge functions are better suited to high-traffic applications, but are more expensive. Unless you NEED your transaction to complete in under 1s, use serverless functions.