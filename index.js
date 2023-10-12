import { TbdexHttpServer } from '@tbdex/http-server'

const api = new TbdexHttpServer()

await api.listen(9000, () => {
  console.log('Server listening on port 9000')
})
