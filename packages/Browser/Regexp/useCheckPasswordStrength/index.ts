const checkPwdLevel = (value: string) => {
  let checkPwdRankValue = -1;

  checkPwdRankValue += value.match(/[a-z]/g) ? 1 : 0;
  checkPwdRankValue += value.match(/[A-Z]/g) ? 1 : 0;
  checkPwdRankValue += value.match(/[0-9]/g) ? 1 : 0;
  checkPwdRankValue += value.match(/[^a-zA-Z0-9]/g) ? 1 : 0;

  checkPwdRankValue = checkPwdRankValue > 3 ? 3 : checkPwdRankValue;

  return checkPwdRankValue;
};

export type StrengthLevel = 0 | 1 | 2 | 3;
/**
 * 检查密码的强度级别
 * @param password
 * @param defineLength
 * @returns
 */
export default function useCheckPasswordStrength(
  password: string,
  defineLength = 8,
): StrengthLevel {
  if (password.length === 0) return 0;

  // risk password of length less than defineLength and password only accord with one match
  if (password.length < defineLength && checkPwdLevel(password) === 0) {
    return 0;
  }

  // weak password length less than defineLength and password only accord with two match
  if (password.length < defineLength && checkPwdLevel(password) === 1) {
    return 1;
  }

  // medium password length greater than defineLength and password only accord with three match
  if (password.length >= defineLength && checkPwdLevel(password) === 2) {
    return 2;
  }

  // strong password length greater than defineLength and password only accord with four match
  if (password.length >= defineLength && checkPwdLevel(password) === 3) {
    return 3;
  }

  return 1;
}
