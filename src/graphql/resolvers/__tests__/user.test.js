import 'dotenv/config';
import { userResolver } from '../user.resolver';
import {
  loginDataThree,
  user,
  fetchedUser,
  resetPasswordInput,
} from '../__mocks__/user.mocks';

const { USER_PASSWORD } = process.env;

let userToken;

describe('User Test Suite', () => {
  let input = {
    email: 'example@example.com',
    password: USER_PASSWORD,
  };

  it('Login a user', async () => {
    jest.spyOn(userResolver.Mutation, 'userLogin');
    userToken = await userResolver.Mutation.userLogin(null, { input });
    expect(userToken).toHaveProperty('token');
  });
  it('Should throw an errow when there is incorrect password or email', async () => {
    input = {
      email: 'example@example.com',
      password: 'USER_PASSWORD',
    };
    try {
      jest.spyOn(userResolver.Mutation, 'userLogin');
      await userResolver.Mutation.userLogin(null, { input });
    } catch (err) {
      expect(err.constructor.name).toEqual('AuthenticationError');
    }
  });
  it('Should throw an errow when the account is not verified', async () => {
    try {
      jest.spyOn(userResolver.Mutation, 'userLogin');
      await userResolver.Mutation.userLogin(null, { input: loginDataThree });
    } catch (err) {
      expect(err.message).toEqual(
        'Please verify your account before you login!',
      );
    }
  });

  // forgot password test

  it('should test forgot password', async () => {
    jest.spyOn(userResolver.Mutation, 'forgotPassword');
    const res = await userResolver.Mutation.forgotPassword(null, {
      email: input.email,
    });
    expect(res).toEqual(
      'Comfirm your email to complete the process. We sent you a reset password email. N.B: The process will be cancelled in one day.',
    );
  });
  it('should throw an error when trying to reset a password of non-existing email', async () => {
    try {
      jest.spyOn(userResolver.Mutation, 'forgotPassword');
      await userResolver.Mutation.forgotPassword(null, { email: user.email });
    } catch (err) {
      expect(err.message).toEqual('Sorry, user not found!');
    }
  });

  // fetch users test

  it('should fetch all users', async () => {
    jest.spyOn(userResolver.Query, 'users');
    const res = await userResolver.Query.users(null, {});
    expect(res[0].dataValues.id).toEqual(fetchedUser.id);
  });
  it('should fetch all users with a specific time', async () => {
    const createdAt = new Date(Date.now()).getTime();
    jest.spyOn(userResolver.Query, 'users');
    const res = await userResolver.Query.users(null, { createdAt });
    expect(res[0].dataValues.id).toEqual(fetchedUser.id);
  });
  it('should throw error when trying to fetch users with incorrect timestamp', async () => {
    try {
      const createdAt = '158998623402033423';
      jest.spyOn(userResolver.Query, 'users');
      await userResolver.Query.users(null, { createdAt });
    } catch (err) {
      expect(err.message).toEqual(err.message);
    }
  });

  // user reset password tests

  it('should test user reset password', async () => {
    jest.spyOn(userResolver.Mutation, 'resetPassword');
    const res = await userResolver.Mutation.resetPassword(
      null,
      { input: resetPasswordInput },
      userToken,
    );
    expect(res).toEqual('password reset was done successfully!!');
  });
  it('should throw an error when a user tried to reset a wrong password', async () => {
    try {
      jest.spyOn(userResolver.Mutation, 'resetPassword');
      await userResolver.Mutation.resetPassword(
        null,
        { input: { ...resetPasswordInput, oldPassword: 'fake@PASSword12345' } },
        userToken,
      );
    } catch (err) {
      expect(err.message).toEqual('Sorry! something wrong happened when reseting your password. Please check your old password and try again!');
    }
  });
});