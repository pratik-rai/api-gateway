const requestHandler = (req, res) => {
	// read cookies
	console.log(req.cookies);

	let options = {
		maxAge: 1000 * 60 * 15, // would expire after 15 minutes
		sameSite: 'lax',
		httpOnly: true // The cookie only accessible by the web server
		// signed: true // Indicates if the cookie should be signed
	};

	// Set cookie
	res.cookie('same-site-cookie', 'foo', options); // options is optional
	res.send('Hello World!');
};

module.exports = requestHandler;
