# name: container-names
# about: plugin to add container names or ids from yml to backup page
# version: 0.0.1
# date: 20 July 2020
# authors: Neo
# url: https://github.com/unixneo/container-names

enabled_site_setting :container_names_enabled

register_asset "stylesheets/common/container-names.scss"

# the below can be moved to the javascript init script
after_initialize do
     if GlobalSetting.main_container_name
      SiteSetting.main_container_name = GlobalSetting.main_container_name
     else
      SiteSetting.main_container_name = 'enabled but unspecified'
     end
     if GlobalSetting.data_container_name
      SiteSetting.data_container_name = GlobalSetting.data_container_name
     else
      SiteSetting.data_container_name = 'enabled but unspecified'
     end
end
