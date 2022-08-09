/**
 * 检测身份证号码是否有效
 * @param value
 * @returns
 */
export default function useCheckIdCard(value: string) {
	if (value === '') {
		throw new Error('please enter IdCard number')
	}
	const checkIdCardRegExp =
		/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|10|11|12)(0[1-9]|[1-2]\d|30|31)\d{3}[\dX]$/g
	return checkIdCardRegExp.test(value)
}
