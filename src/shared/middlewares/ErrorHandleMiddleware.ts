import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";

export default class ErrorHandleMiddleware {
  public static hadlerError(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    if(error instanceof AppError) {
      return res.status(error.statusCode).json({
        type: 'error',
        message: error.message
      })
    }
  }
}
