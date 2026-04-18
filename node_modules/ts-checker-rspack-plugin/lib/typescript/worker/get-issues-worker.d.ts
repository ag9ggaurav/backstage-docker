import type { FilesChange } from '../../files-change';
import type { Issue, IssueDefaultSeverity } from '../../issue';
declare const getIssuesWorker: (change: FilesChange, watching: boolean, defaultSeverity: IssueDefaultSeverity) => Promise<Issue[]>;
export type GetIssuesWorker = typeof getIssuesWorker;
export {};
