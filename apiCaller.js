const apis = require('./apisSpecs');
const partners = require('./partners');
const axios = require('axios');
const mappedKeys = require('./keyMaps');
const corsBypass = 'https://cors-anywhere.herokuapp.com/';

const findPartner = adunit => {
	return partners.find(partner => {
		const regex = new RegExp(partner, 'gi');
		return regex.test(adunit) ? partner : '';
	});
};

const createApiReqUrl = body => {
	let { client } = body;
	let partner = findPartner(body.partner);
	let mappedClientKeys = mappedKeys[client];
	let mappedClientKeysToPartner = mappedClientKeys[partner];
	let requestedPartnerApiSpec = apis[partner];
	let baseUrl = requestedPartnerApiSpec.baseUrl;
	let requestParams = Object.keys(body);
	let params = requestParams.reduce((paramsList, param) => {
		if (param === client && param === partner) {
			return;
		}
		mappedClientKeysToPartner[param] &&
			paramsList.push(
				mappedClientKeysToPartner[param] + '=' + body[param]
			);
		return paramsList;
	}, []);
	return baseUrl + params.join('&');
};

const apiCaller = async body => {
	const requestUrl = createApiReqUrl(body);
	return await axios(requestUrl)
		.then(res => {
			return res.data;
		})
		.catch(error => {
			console.log(error);
		});
};

module.exports = apiCaller;
