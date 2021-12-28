import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs'

createServer({
  models: {
    anotation: Model,
  },
  seeds(server) {
    server.db.loadData({
      anotations: [
        {
          id: 1,
          name: 'João Rodrigo',
          type: 'alta',
          report: 'Paciente mantem o quadro clinico',
          createAt: new Date('2021-12-23 08:00:00'),
        },
        {
          id: 2,
          name: 'Maria Jose',
          type: 'prorrogacao',
          report: 'Paciente evoluiu com melhoras do quadro motor',
          createAt: new Date('2021-12-15 12:00:00'),
        }
      ],
    })
  },
  
  routes() {
    this.namespace = 'api'
    this.get('/anotations', () => {
     return this.schema.all('anotation');
    })

    this.post('/anotations', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('anotation', data) 
    } )
  }
})
ReactDOM.render( <App />, document.getElementById('root'));
