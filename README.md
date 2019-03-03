Omnomnomp
=============

A fun, weekend self-hackathon I made for myself to learn about grapthQL and experiment with React hooks

Omnomnomp is a food pictures board where you can browse, like and upload pictures of your favourite food!


![demo](https://github.com/kubenstein/omnomnomp/blob/master/demo.jpg)


### Tech stack and architecture

The app is divided into frontend and backend. Frontend is written as a React app, its maintain its state and connects to each component in a similar way react-redux does. The main data provider can be found [here](https://github.com/kubenstein/omnomnomp/blob/master/src/frontend/lib/appState/index.jsx) and connect HOF [here](https://github.com/kubenstein/omnomnomp/blob/master/src/frontend/lib/appState/connect.jsx). Frontend communicates with backend via websockets and using graphQL commands. On successful login a web socket connection is established ([here](https://github.com/kubenstein/omnomnomp/blob/master/src/frontend/components/Login/index.js)), opening a communication channel for later queries ([example](https://github.com/kubenstein/omnomnomp/blob/master/src/frontend/components/Board/index.js)).


Backend is an express app that has only two endpoints: a socket channel for graphql and a post http route for uploading images. Graphsql schema can be found [here](https://github.com/kubenstein/omnomnomp/blob/master/src/backend/graphql/schema.js) and resolvers that transform graphql commands into postgres/sqlite commands [here](https://github.com/kubenstein/omnomnomp/blob/master/src/backend/graphql/resolvers.js). Database connection is done by wonderful toolkit: sequelize.


Image uploading is handled by cloudinary. The adding image flow looks like: a user takes a photo and uploads it via post http request. In return the public url is returned. With this url, the graphql mutation is executed resulting in adding a new image and returning its data.

### Development

```
npm run dev:db:migrate

npm run dev:backend  # one terminal
npm run dev:frontend # second terminal
```
Then visit `http://localhost:8080/`.

### License
MIT
