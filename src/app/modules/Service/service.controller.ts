// controllers/service.controller.ts
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceService } from './service.service';

const createService = catchAsync(async (req, res) => {
  const result = await ServiceService.createService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Service is created successfully',
    data: result,
  });
});

const findServiceById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceService.findServiceById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is retrieved successfully',
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceService.getAllServices(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Services are retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateServiceById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceService.updateServiceById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is updated successfully',
    data: result,
  });
});

const deleteServiceById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServiceService.deleteServiceById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service is deleted successfully',
    data: result && null,
  });
});

export const ServiceController = {
  createService,
  findServiceById,
  getAllServices,
  updateServiceById,
  deleteServiceById,
};
