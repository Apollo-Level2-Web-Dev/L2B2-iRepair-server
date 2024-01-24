import QueryBuilder from '../../builder/QueryBuilder';
import { IssuedSearchableFields } from './issue.constant';
import { IIssue } from './issue.interface';
import { Issue } from './issue.model';

const createIssue = async (issue: IIssue) => {
  return await Issue.create(issue);
};

const findIssueById = async (issueId: string) => {
  return await Issue.findById(issueId);
};

const getAllIssues = async (query: Record<string, unknown>) => {
  const issueQuery = new QueryBuilder(Issue.find(), query)
    .search(IssuedSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await issueQuery.modelQuery;
  const metaData = await issueQuery.countTotal();
  return {
    meta: metaData,
    data: result,
  };
};

const updateIssueById = async (issueId: string, payload: Partial<IIssue>) => {
  const result = await Issue.findByIdAndUpdate(issueId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteIssueById = async (issueId: string) => {
  const result = await Issue.findByIdAndDelete(issueId);
  return result;
};

export const IssueService = {
  createIssue,
  findIssueById,
  getAllIssues,
  updateIssueById,
  deleteIssueById,
};
