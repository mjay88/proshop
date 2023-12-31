//will catch any thrown errors in our auth contoller
const asyncHandler = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
