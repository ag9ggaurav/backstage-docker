import type * as rspack from '@rspack/core';
import type { IssueOptions } from './issue-options';
import type { IssuePredicate } from './issue-predicate';
import type { IssueDefaultSeverity } from './issue-severity';
interface IssueConfig {
    predicate: IssuePredicate;
    defaultSeverity: IssueDefaultSeverity;
}
declare function createIssueConfig(compiler: rspack.Compiler, options: IssueOptions | undefined): IssueConfig;
export { IssueConfig, createIssueConfig };
