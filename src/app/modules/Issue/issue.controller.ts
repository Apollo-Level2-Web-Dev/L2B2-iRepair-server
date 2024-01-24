// controllers/issue.controller.ts
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { IssueService } from './issue.service';

const createIssue = catchAsync(async (req, res) => {
  const result = await IssueService.createIssue(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Issue is created successfully',
    data: result,
  });
});

const findIssueById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await IssueService.findIssueById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Issue is retrieved successfully',
    data: result,
  });
});

const getAllIssues = catchAsync(async (req, res) => {
  const result = await IssueService.getAllIssues(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Issues are retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateIssueById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await IssueService.updateIssueById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Issue is updated successfully',
    data: result,
  });
});

const deleteIssueById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await IssueService.deleteIssueById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Issue is deleted successfully',
    data: result && null,
  });
});

export const IssueController = {
  createIssue,
  findIssueById,
  getAllIssues,
  updateIssueById,
  deleteIssueById,
};
