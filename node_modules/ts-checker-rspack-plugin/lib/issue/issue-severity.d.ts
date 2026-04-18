export type IssueSeverity = 'error' | 'warning';
export type IssueDefaultSeverity = IssueSeverity | 'auto';
export declare function isIssueSeverity(value: unknown): value is IssueSeverity;
export declare function compareIssueSeverities(severityA: IssueSeverity, severityB: IssueSeverity): number;
