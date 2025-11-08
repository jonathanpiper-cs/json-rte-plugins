import ContentstackSDK from "@contentstack/app-sdk"
import { SetFontColor } from "./setfontcolor"
import { setFontWeight } from "./setfontweight"

export default ContentstackSDK.init().then(async (sdk) => {
    const extensionObj = await sdk["location"]
    const RTE = await extensionObj["RTEPlugin"]
    if (!RTE) return

    const SetFontColorPlugin = SetFontColor(RTE)
    const SetFontWeight = setFontWeight(RTE)

    return {
        SetFontColorPlugin,
        SetFontWeight,
    }
})