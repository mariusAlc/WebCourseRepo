/** This file is automatically generated by webpack plugins, no not edit
 *
 * In server/server.ts, import this file
 * import { Imports, RegisterFunction } from "./server_types";
 */

import { webserver } from "../../webserver/server_exports";
export * from "../../webserver/server_exports";
import { image_display } from "./server_exports";
export * from "./server_exports";

export interface Imports
{
	webserver: webserver;
}


export interface Exports
{
	image_display: image_display;
}

export type RegisterFunction = (error: null | Error, provides: Exports) => void;
