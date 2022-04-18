import bcrypt from "bcrypt";

class PasswordHash {
  public static passwordHash = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
  };
  // public static hash = (password: string): Promise<string> => {
  //   return bcrypt.hash(password, 10);
  // };
}

export default PasswordHash;
