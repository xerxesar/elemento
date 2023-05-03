import store from "@/store";

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const role = store.getters.role || "none";
    const permissionRoles = value;

    const hasPermission = permissionRoles.includes(role);

    if (!hasPermission) {
      return false;
    }
    return true;
  } else {
    console.error("need roles! Like v-permission=\"['admin','editor']\"");
    return false;
  }
}
