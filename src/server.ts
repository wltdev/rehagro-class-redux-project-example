import { createServer, Model } from 'miragejs';
import { faker } from '@faker-js/faker';

createServer({
    models: {
        customer: Model
    },
    seeds(server) {
        server.create('customer', {
            id: faker.database.mongodbObjectId(),
            name: faker.person.firstName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            createdAt: faker.date.past()
        });
        server.create('customer', {
            id: faker.database.mongodbObjectId(),
            name: faker.person.firstName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            createdAt: faker.date.past()
        });
        server.create('customer', {
            id: faker.database.mongodbObjectId(),
            name: faker.person.firstName(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            createdAt: faker.date.past()
        });
    },

    routes() {
        this.namespace = 'api';

        this.get('/customers', (schema, request) => {
            return schema.all('customer');
        });

        // Permite requisições externas passarem pelo MirageJS
        this.passthrough('https://jsonplaceholder.typicode.com/**');
    }
});
