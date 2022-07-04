# About Cheeseria React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This is a POC of a FE of a Cheeseria showing a list of cheeses retrieved from the Cheeseria API server.
It also has a capability to calculate the price of a cheese based on the chosen amount and price per kilo for that cheese.

## To run the app in the development mode:

```
npm run start
```

Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

## To run the app in the Docker container:

Build the Docker image:

```
docker build -t cheeseria-react-app-prod .
```

Run the Docker image:

```
docker run -p 1337:80 -it cheeseria-react-app-prod
```

Open [http://localhost:1337](http://localhost:1337) to view it in your browser.

## To run the app in the Docker container using docker-compose:

```
docker-compose up -d
```

Open [http://localhost:1337](http://localhost:1337) to view it in your browser.

## TODOs:

1. The Cheeseria API server URI is hardcoded as `export const CHEESERIA_API = "http://localhost:3000";`
2. More unit tests to add
3. Migrate to typescript
4. PriceCalculator is supposed to be an optional addition - this could be implemented using a flag set by the user, or via a federated module if preferred. To enable that, PriceCalculator was implemented as an isolated component - can become optional at any time.
