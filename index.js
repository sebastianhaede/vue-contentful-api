(function () {

    /**
     * Install plugin
     * @param Vue
     * @param contentful
     */

    function plugin (Vue, contentful) {
        if (plugin.installed) return
        plugin.installed = true

        if (!contentful) {
            throw new Error("[Vue-Echo] cannot locate options");
        }

        Vue.contentful = contentful
        Vue.prototype.contentful = contentful
    }

})()
