import colors from "colors";

export function requestTime(req, res, next) {
  req.requestTime = new Date();
  next();
}

export function logger(req, res, next) {
  next();
}
