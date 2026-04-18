import { createPermission } from '@backstage/plugin-permission-common';

const kubernetesProxyPermission = createPermission({
  name: "kubernetes.proxy",
  attributes: {}
});
const kubernetesResourcesReadPermission = createPermission({
  name: "kubernetes.resources.read",
  attributes: {
    action: "read"
  }
});
const kubernetesClustersReadPermission = createPermission({
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

export { kubernetesClustersReadPermission, kubernetesPermissions, kubernetesProxyPermission, kubernetesResourcesReadPermission };
//# sourceMappingURL=permissions.esm.js.map
