<script>
import SvgIconComponent from "@/components/SvgIconComponent.vue";

export default {
  name: "SidebarItemRenderer",
  functional: true,
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  render(h, context) {
    console.log({ context, h });
    const { icon, title } = this;
    const vnodes = [];

    if (icon) {
      vnodes.push(<mdicon style="margin-right:10px" name={icon} size="24" />);
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  },
};
</script>
