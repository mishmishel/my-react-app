import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import db from "db.json"

function runServer() {
  createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: makeModels(db),

    seeds(server) {
      for (const resource in db) {
        const model = singularize(resource);
        for (const item of db[resource]) {
          server.create(model, item);
        }
      }
    },

    routes() {
      this.logging = false;

      for (const resource in db) {
        this.get(`/${resource}`);
        this.post(`/${resource}`);
        this.patch(`/${resource}/:id`);
        this.del(`/${resource}/:id`);
      }
    },
  });
}

export default runServer;

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById("root")
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
