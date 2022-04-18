import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Authentication {
  public static passwordHash = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
  };
  public static passwordCompare = async (
    text: string,
    encryptText: string
  ): Promise<boolean> => {
    const isCorrectPassword = await bcrypt.compare(text, encryptText);
    return isCorrectPassword;
  };

  public static tokenGenerator = (id: number, username: string) => {
    const secretKey = process.env.SECRET_KEY || "secret";
    const token = jwt.sign({ id, username }, secretKey, { expiresIn: "30d" });
    return token;
  };
}

export default Authentication;
