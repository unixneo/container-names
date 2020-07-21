import computed from "discourse-common/utils/decorators";
export default Ember.Component.extend({
  // @computed is not working as hoped
  @computed("connames", "container_main", "container_data")
  importId(connames, container_main, container_data) {
    if (Discourse.User.current() == null) {
      return "";
    } else {
      let connames = "";
      let container_main = Discourse.SiteSettings.container_main;
      let container_data = Discourse.SiteSettings.container_data;

      //let container_main = Discourse.GlobalSetting.container_main;
      //let container_data = Discourse.GlobalSetting.container_data;

      if (container_main.length > 0 && container_data.length > 0) {
        connames =
          '<span class="category-name container-id">Containers: ' +
          container_main +
          ", " +
          container_data +
          "</a></span>";
      } else if (container_main.length > 0) {
        connames =
          '<span class="container-names">Container: ' +
          container_main +
          "</a></span>";
      } else {
        connames = "";
      }

      let safeReturn = "";
      try {
        safeReturn = Ember.String.htmlSafe(connames);
      } catch (err) {
        console.log("err: ", err.message);
      }
      return safeReturn;
    }
  },

  actions: {
    // refreshRoute is not working as hoped
    refreshOnChange: function () {
      this.refresh();
    },
  },
});
