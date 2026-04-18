'use strict';

var errors = require('@backstage/errors');
var pluginPermissionCommon = require('@backstage/plugin-permission-common');

async function requirePermission(permissionApi, permissionRequired, httpAuth, req) {
  const decision = (await permissionApi.authorize(
    [
      {
        permission: permissionRequired
      }
    ],
    {
      credentials: await httpAuth.credentials(req)
    }
  ))[0];
  if (decision.result === pluginPermissionCommon.AuthorizeResult.ALLOW) {
    return;
  }
  throw new errors.NotAllowedError("Unauthorized");
}

exports.requirePermission = requirePermission;
//# sourceMappingURL=requirePermission.cjs.js.map
