import {Hono} from 'hono';

const app = new Hono().basePath('/api/user');

app.get('/', (c) => {
    return c.text('wsbhts-user Service');
});

export default app;
