const apiSpecs = require('./apisSpecs');
const ebaykKeys = require('./ebaykKeys');

const mapEbayKKeysToTreebay = () => {
	const { treebay } = apiSpecs;
	const { params } = treebay;
	return {
		[ebaykKeys.kw]: params.q,
		[ebaykKeys.gam_count]: params.pageNumber,
		[ebaykKeys.platform]: params.platform,
		[ebaykKeys.yo_app]: params.groupId,
		[ebaykKeys.tcat]: params.level1CategoryId,
		[ebaykKeys.tcat]: params.level2CategoryId
	};
};

const mapEbayKKeysToJoblift = () => {
	const { joblift } = apiSpecs;
	const { params } = joblift;
	return {
		[ebaykKeys.kw]: params.title,
		[ebaykKeys.g_pn]: params.page,
		[ebaykKeys.location]: params.location,
		[ebaykKeys.gam_count]: params.pageSize,
		[ebaykKeys.cachebuster]: params.cachebuster
	};
};

const mappedKeys = {
	ebayk: {
		treebay: mapEbayKKeysToTreebay(),
		joblift: mapEbayKKeysToJoblift()
	}
};

module.exports = mappedKeys;
