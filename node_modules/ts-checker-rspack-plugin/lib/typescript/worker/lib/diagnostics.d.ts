import type * as ts from 'typescript';
import type { Issue, IssueDefaultSeverity } from '../../../issue';
export declare function updateDiagnostics(configFile: string, diagnostics: ts.Diagnostic[]): void;
export declare function getIssues(defaultSeverity: IssueDefaultSeverity): Issue[];
export declare function invalidateDiagnostics(): void;
export declare function getDiagnosticsOfProgram(program: ts.Program | ts.BuilderProgram): ts.Diagnostic[];
export declare function createIssuesFromDiagnostics(diagnostics: ts.Diagnostic[], defaultSeverity: IssueDefaultSeverity): Issue[];
