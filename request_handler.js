const apiCaller = require('./apicaller');

const requestHandler = async (req, res) => {
	const { body } = req;
	const data = await apiCaller(body);
	// let options = {
	// 	maxAge: 1000 * 60 * 15, // would expire after 15 minutes
	// 	sameSite: 'lax',
	// 	httpOnly: true // The cookie only accessible by the web server
	// 	// signed: true // Indicates if the cookie should be signed
	// };

	// // Set cookie
	// res.cookie('same-site-cookie', 'foo', options); // options is optional
	await res.json(data);
};

module.exports = requestHandler;
