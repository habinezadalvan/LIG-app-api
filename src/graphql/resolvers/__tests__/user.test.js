import 'dotenv/config';
import dbConnection from '../../../db/connectDb';
import { userResolver } from '../user.resolver';

const { USER_PASSWORD } = process.env;

describe('User Test Suite', () => {
  beforeAll(async () => {
    await dbConnection;
  });
  afterAll((done) => {
    dbConnection.close();
    done();
  });
  const input = {
    email: 'example@example.com',
    password: USER_PASSWORD,
  };

  it('Login a user', async () => {
    jest.spyOn(userResolver.Mutation, 'userLogin');
    const res = await userResolver.Mutation.userLogin(null, { input });
    expect(res).toHaveProperty('token');
  });
});
