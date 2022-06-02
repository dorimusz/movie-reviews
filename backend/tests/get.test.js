const app = require('../app')
const supertest = require('supertest')
const Movie = require('../model/movie')
const User = require('../model/user')
const { startDb, stopDb, deleteAll } = require('./utils/inMemoryDb')


describe("get requests to api/appointment", () => {
    let connection,
    server,
    client
  
    beforeAll(async () => {
      [connection, server] = await startDb();
      client = supertest.agent(app);
    });
  
    afterEach(async () => {
      await deleteAll(Movie, User);
    });
  
    afterAll(async () => {
      await stopDb(connection, server);
    });


    test("if we haven't saved any movies, the response will be an empty array", async () => {
        // given
        
    
        // when
        const response = await client.get("/api/movies");

        // then
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual([]);
    });
});


