'use strict';

var pluginPermissionCommon = require('@backstage/plugin-permission-common');

const kubernetesProxyPermission = pluginPermissionCommon.createPermission({
  name: "kubernetes.proxy",
  attributes: {}
});
const kubernetesResourcesReadPermission = pluginPermissionCommon.createPermission({
  name: "kubernetes.resources.read",
  attributes: {
    action: "read"
  }
});
const kubernetesClustersReadPermission = pluginPermissionCommon.createPermission({
  name: "kubernetes.clusters.read",
  attributes: {
    action: "read"
  }
});
const kubernetesPermissions = [
  kubernetesProxyPermission,
  kubernetesResourcesReadPermission,
  kubernetesClustersReadPermission
];

exports.kubernetesClustersReadPermission = kubernetesClustersReadPermission;
exports.kubernetesPermissions = kubernetesPermissions;
exports.kubernetesProxyPermission = kubernetesProxyPermission;
exports.kubernetesResourcesReadPermission = kubernetesResourcesReadPermission;
//# sourceMappingURL=permissions.cjs.js.map
