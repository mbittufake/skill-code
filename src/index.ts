import { Hono } from 'hono'
import { skillFinder } from './func'
import { config } from 'dotenv'
import { GetAgent } from './ai'

const app = new Hono()
config()
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/skill', async (c) => {
  let body = await c.req.json()
  let answer = await GetAgent().run(body.query)
  return c.text(JSON.stringify(answer))
})


export default app
