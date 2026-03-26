import { NextFunction, Request, Response } from 'express';

type AllowedFileTypes = FileType[];

export function validadateFileExtensionMiddleware (availableTypes: AllowedFileTypes) {
	return (req: Request, res: Response, next: NextFunction) => {
		console.log(req.file);

		next();
	}
};