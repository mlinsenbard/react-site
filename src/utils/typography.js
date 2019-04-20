import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.headerFontFamily = ["Avenir Next"]

const typography = new Typography(lincolnTheme)

export const { scale, rhythm, options } = typography
export default typography
