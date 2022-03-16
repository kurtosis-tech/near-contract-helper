const { updateDocument } = require('../../dynamo');
const RecoveryMethod = require('../../schemas/recovery_method');
const { buildRecoveryMethodRangeKey } = require('../../utils');

function updateRecoveryMethod({ accountId, kind, publicKey }, { detail, requestId, securityCode }) {
    return updateDocument(RecoveryMethod, {
        accountId,
        compositeKey: buildRecoveryMethodRangeKey({ kind, publicKey }),
        detail,
        kind,
        publicKey,
        requestId,
        securityCode,
    });
}

module.exports = updateRecoveryMethod;
