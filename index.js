export default {

    /**
     * Install plugin.
     * @param Vue
     * @param contentful
     */

    install(Vue, contentful)
    {
        if (!contentful) {
            throw new Error("You have to install contentful.")
        }

        Vue.contentful = contentful
        Vue.prototype.contentful = contentful
    }

}