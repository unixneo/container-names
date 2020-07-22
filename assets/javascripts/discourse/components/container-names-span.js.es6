import computed from "discourse-common/utils/decorators";
import I18n from "I18n";
export default Ember.Component.extend({
  // @computed is not working as hoped
  // must reload page / app to this this to refresh
  // PR welcome, thanks.
  @computed("connames", "container_main", "container_data")
  importId(connames, container_main, container_data) {
    if (Discourse.User.current() == null) {
      return "";
    } else {
      let connames = "";
      let container_main = Discourse.SiteSettings.container_main;
      let container_data = Discourse.SiteSettings.container_data;

      // this is a mess but I cannot get I18 to work as expected
      // from reading the code :(  PR welcome :)

      if (container_main.length > 0 && container_data.length > 0) {
        connames =
          '<span class="container-names">Containers: ' +
          container_main +
          ", " +
          container_data +
          "</span>";
      } else if (container_main.length > 0) {
        connames =
          '<span class="container-names">Container: ' +
          container_main +
          "</span>";
      } else {
        connames = "";
      }

      let safeReturn = "";
      try {
        safeReturn = Ember.String.htmlSafe(connames);
      } catch (err) {
        console.log("err: ", err.message);
      }
      //Cannot get I18n to work yet!
      //safeReturn = I18n.t("js.admin.containers");
      return safeReturn;
    }
  },
});
