import {Hono} from 'hono';

type Bindings = {
    USER_SERVICE: Fetcher;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', (c) => {
    return c.text('wsbhts-gateway Service');
});
app.get('/api/user/*', async (c) => {
    return  await c.env.USER_SERVICE.fetch(c.req.raw)
})

export default app;
