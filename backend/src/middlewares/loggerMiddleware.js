// loggerMiddleware.js
import { getHeaderToken, verifyJWT } from "../libs/jwt.js";
import { logger } from "../log/LogActivity.js";

const methodsToFilter = ["GET"];

const loggerMiddleware = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  // const token = getHeaderToken();
  if (
    authHeader &&
    authHeader !== "Bearer null" &&
    !methodsToFilter.includes(req.method)
  ) {
    const token = getHeaderToken(req);
    const user = await verifyJWT(token);

    logger({
      httpMethod: req.method,
      endPoint: req.originalUrl,
      action: `${user.userId} ${user.username}`,
    });
  }
  // console.log(req.headers.split())

  next();
};

export default loggerMiddleware;
