import 'dotenv/config';

const { USER_PASSWORD, USER_NEW_PASSWORD } = process.env;

export const loginData = {
  email: 'example@example.com',
  password: USER_PASSWORD,
};

export const loginDataTwo = {
  email: 'example@example2.com',
  password: USER_PASSWORD,
};

export const loginDataThree = {
  email: 'example@example3.com',
  password: USER_PASSWORD,
};

export const loginDataFour = {
  email: 'example@example4.com',
  password: USER_PASSWORD,
};
export const user = {
  firstName: 'firstname',
  lastName: 'lastname',
  userName: 'username',
  email: 'email@gmail.com',
  password: 'TESTpassword123!@#',
  phoneNo: '+25030393944',
  avatar: 'image',
  roleId: 1,
};
export const testUser = {
  dataValues: {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    userName: 'johndoe',
    email: 'example@example.com',
    password: 'fakepassword',
    phoneNo: '+230494484475',
    accountStatus: null,
    positionStatus: 'active',
    verified: true,
    savingId: 1,
    createdAt: '2020-05-24T15:21:38.774Z',
    updatedAt: '2020-05-24T15:21:38.774Z',
    positionId: 1,
    roleId: 1,
  },
};


export const testUserThree = {
  dataValues: {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    userName: 'johndoe',
    email: 'example@example.com',
    password: 'fakepassword',
    phoneNo: '+230494484475',
    accountStatus: null,
    positionStatus: 'active',
    verified: true,
    savingId: 0,
    createdAt: '2020-05-24T15:21:38.774Z',
    updatedAt: '2020-05-24T15:21:38.774Z',
    positionId: 0,
    roleId: 0,
  },
};

export const testUserTwo = {
  dataValues: {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    userName: 'johndoe',
    email: 'example@example.com',
    password: 'fakepassword',
    phoneNo: '+230494484475',
    accountStatus: null,
    positionStatus: 'active',
    verified: true,
    savingId: 2,
    createdAt: '2020-05-24T15:21:38.774Z',
    updatedAt: '2020-05-24T15:21:38.774Z',
    positionId: 0,
    roleId: 0,
  },
};

export const userTwo = {
  id: 0,
  firstName: 'firstname2',
  lastName: 'lastname2',
  userName: 'username2',
  email: 'email2gmail.com',
  password: 'TESTpassword123!@#',
  phoneNo: '+25030393944',
  avatar: 'image',
  roleId: 1,
  positionId: 1,
};
export const updateUserRole = {
  roleId: 2,
};

export const userUpdateProfile = {
  firstName: 'firstnameUpdated',
  lastName: 'lastnameUpdated',
};

export const fetchedUser = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  userName: 'johndoe',
  email: 'example@example.com',
  password: 'password',
  phoneNo: '+230494484475',
  avatar: 'image',
  accountStatus: 'activated',
  positionStatus: 'active',
  verified: true,
  createdAt: '2020-05-20T15:08:14.691Z',
  updatedAt: '2020-05-20T15:08:14.691Z',
  positionId: 1,
  roleId: 1,
};

export const resetPasswordInput = {
  oldPassword: USER_PASSWORD,
  newPassword: USER_NEW_PASSWORD,
  comparePassword: USER_NEW_PASSWORD,
};

export const fakeUser = {
  id: 0,
  firstName: 'fake',
  lastName: 'fake',
  userName: 'fake',
  email: 'fake@gmail.com',
  phoneNo: '+25030393944',
  avatar: 'image',
  roleId: 1,
  verified: true,
};
