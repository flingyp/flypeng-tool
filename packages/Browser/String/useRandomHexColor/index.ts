/**
 * 随机生成HEX色值的颜色
 * @returns
 */
export default function useRandomHexColor() {
	return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
}
