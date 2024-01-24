import QueryBuilder from '../../builder/QueryBuilder';
import { serviceSearchableFields } from './service.constant';
import { IService } from './service.interface';
import { Service } from './service.model';

const createService = async (service: IService) => {
  return await Service.create(service);
};

const findServiceById = async (serviceId: string) => {
  return await Service.findById(serviceId);
};

const getAllServices = async (query: Record<string, unknown>) => {
  const serviceQuery = new QueryBuilder(Service.find(), query)
    .search(serviceSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await serviceQuery.modelQuery;
  const metaData = await serviceQuery.countTotal();
  return {
    meta: metaData,
    data: result,
  };
};

const updateServiceById = async (
  serviceId: string,
  payload: Partial<IService>,
) => {
  const result = await Service.findByIdAndUpdate(serviceId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteServiceById = async (serviceId: string) => {
  const result = await Service.findByIdAndDelete(serviceId);
  return result;
};

export const ServiceService = {
  createService,
  findServiceById,
  getAllServices,
  updateServiceById,
  deleteServiceById,
};
