import computed from "discourse-common/utils/decorators";
export default Ember.Component.extend({
  @computed("randNeo")
  importId(cf) {
    var randNeo = Math.floor(Math.random() * 10000) + 1;
    if (Discourse.User.current() == null) {
      return "";
    } else {
      let connames = "";
      let main_container_name = Discourse.SiteSettings.main_container_name;
      let data_container_name = Discourse.SiteSettings.data_container_name;

      //let main_container_name = Discourse.GlobalSetting.main_container_name;
      //let data_container_name = Discourse.GlobalSetting.data_container_name;

      if (main_container_name.length > 0 && data_container_name.length > 0) {
        connames =
          '<span class="category-name container-id">Containers: ' +
          main_container_name +
          ", " +
          data_container_name +
          "</a></span>";
      } else if (main_container_name.length > 0) {
        connames =
          '<span class="container-names">Container: ' +
          main_container_name +
          "</a></span>";
      } else {
        connames = "";
      }

      console.log("connames: ", connames);
      let safeReturn = "";
      try {
        safeReturn = Ember.String.htmlSafe(connames);
      } catch (err) {
        console.log("err: ", err.message);
      }

      return safeReturn;
    }
  },
});
