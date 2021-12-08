import ReactDOM from 'react-dom';
import App from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'
    this.get('/anotations', () => {
      return [
        {
          id:1,
          titile: 'anotations 1',
          amout: 400,
          type: 'anotations',
          category: 'organization',
          creteAt: new Date()
        }
      ]
    })
  }
})
ReactDOM.render( <App />, document.getElementById('root'));
