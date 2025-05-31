import type { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    error: "Unexpected issue occured during the application process.",
  });
};
