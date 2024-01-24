import QueryBuilder from '../../builder/QueryBuilder';
import { UserSearchableFields } from './user.constant';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (user: IUser) => {
  return await User.create(user);
};

const findUserById = async (userId: string) => {
  return await User.findById(userId);
};

const getAllUsers = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .search(UserSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await userQuery.modelQuery;
  const metaData = await userQuery.countTotal();
  return {
    meta: metaData,
    data: result,
  };
};

const updateUserById = async (userId: string, payload: Partial<IUser>) => {
  const result = await User.findByIdAndUpdate({ _id: userId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteUserById = async (userId: string) => {
  const result = await User.findByIdAndDelete(userId);
  return result;
};

export const UserService = {
  createUser,
  findUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
};
