import { NextFunction, Request, Response } from 'express';

export class InventoryFileController {
  analyzeInventoryFile(req: Request, res: Response, next: NextFunction) {
    console.log(req, res);

    res.status(200).json({
      message: 'Congratulations',
    });
  }
}
