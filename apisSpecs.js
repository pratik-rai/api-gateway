let apis = {
	treebay: {
		baseUrl:
			'https://treebay.ebayclassifiedsgroup.com/ebayk/search?entriesPerPage=1&',
		params: {
			platform: 'platform',
			q: 'q',
			groupId: 'groupId',
			pageNumber: 'pageNumber',
			level1CategoryId: 'level1CategoryId',
			level2CategoryId: 'level2CategoryId'
		}
	},
	joblift: {
		baseUrl:
			'https://external.joblift.de/search/ebay-kleinanzeigen?site=de&',
		params: {
			cachebuster: 'cachebuster',
			location: 'location',
			title: 'title',
			page: 'page',
			pageSize: 'pageSize'
		}
	}
};

module.exports = apis;
