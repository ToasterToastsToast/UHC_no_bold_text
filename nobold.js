module.exports = {
    title: "No Bold Font",
    summary: "Disables default bold font in comic.",
    description: "This mod disables the hardcoded bold font used by default in the story text.",
    author: "Toaster",
    Version: 0.1,

    vueHooks: [{
        matchName: "pageText", // 匹配 PageText.vue 组件
        computed: {
            fontFamily($super) {
                const result = []

               
                if (this.$localData.settings.textOverride.fontFamily) {
                    result.push(this.$localData.settings.textOverride.fontFamily)

                    if (this.$localData.settings.textOverride.bold) {
                        result.push('bold') 
                    }
                }

                if (this.$localData.settings.textOverride.paragraphSpacing) {
                    result.push("paragraphSpacing")
                }

                return result
            }
        }
    }]
}
