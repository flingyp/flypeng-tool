enum TransformCaseTypeEnum {
  LOWER_CASE = 0,
  UPPER_CASE = 1,
  FIRST_LOWER_CASE = 2,
}

export type TransformCaseType = (typeof TransformCaseTypeEnum)[keyof typeof TransformCaseTypeEnum];

/**
 * 将字符串转换大小写
 * @param str
 * @param type
 * @returns
 */
export default function useTransformCase(str: string, type: TransformCaseType) {
  switch (type) {
    case TransformCaseTypeEnum.LOWER_CASE:
      return str.toLowerCase();

    case TransformCaseTypeEnum.UPPER_CASE:
      return str.toUpperCase();

    case TransformCaseTypeEnum.FIRST_LOWER_CASE:
      return `${str.charAt(0).toLocaleLowerCase()}${str.slice(1)}`;

    default:
      return str;
  }
}
