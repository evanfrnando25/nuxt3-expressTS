import bcrypt from "bcrypt";

//ini untuk nutupin passwordnya
const PasswordHashing = async (password: string): Promise<string> => {
  const result = await bcrypt.hash(password, 10);
  return result;
};

//ini untuk compare password yang di send sama yang ada di database sama ga
const PasswordCompare = async (
  password: string,
  passwordHash: string
): Promise<boolean> => {
  const matchPassword = await bcrypt.compare(password, passwordHash);

  return matchPassword;
};

export default { PasswordHashing, PasswordCompare };
