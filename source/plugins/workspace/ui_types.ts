/** This file is automatically generated by webpack plugins, no not edit
 *
 * In ui.ts, import this file
 * import { Imports, RegisterFunction } from "./ui_types";
 */

import { application } from "../application/ui_exports";
export * from "../application/ui_exports";
import { workspace } from "./ui_exports";
export * from "./ui_exports";

export interface Imports
{
	application: application;
}


export interface Exports
{
	workspace: workspace;
}

export type RegisterFunction = (error: null | Error, provides: Exports) => void;

declare global
{
	export interface UI
	{
		workspace: workspace;
	}
}

