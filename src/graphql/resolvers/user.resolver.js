import { User } from '../../services/user.service';
import { Admin } from '../../services/admin.service';
import { decodeToken } from '../../helpers/user.helpers';
import { generalValidator } from '../../helpers/general.validator';
import { loginSchema, createUserSchema, updateUserSchema } from '../../utils/schemas/user.schemas';
import { isAdmin, addTokenToResults } from '../../utils/user.utils';

export const userResolver = {
  Mutation: {
    addUser: async (_, { input }, { token }) => {
      const loggedUser = await decodeToken(token);
      isAdmin(loggedUser);
      generalValidator(input, createUserSchema);
      const admin = new Admin(input);
      const user = await admin.createUser();
      return addTokenToResults(user);
    },

    userLogin: async (_, { input }) => {
      generalValidator(input, loginSchema);
      const loggingIn = new User(input);
      const token = await loggingIn.login();
      return { token };
    },
    updateUser: async (_, { id, input }, { token }) => {
      const loggedUser = await decodeToken(token);
      isAdmin(loggedUser);
      generalValidator(input, updateUserSchema);
      const adminInstance = new Admin(input);
      const updatedUser = await adminInstance.updateUser(id, input);
      return addTokenToResults(updatedUser);
    },
  },
};
