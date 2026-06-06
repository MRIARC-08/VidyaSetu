import jwt, { JwtPayload } from 'jsonwebtoken';

interface AccessTokenPayload extends JwtPayload {
  sub: string;
  role: string;
  isEmailVerified: boolean;
}

class JwtServices {
  private readonly secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  generateAccessToken(user: {
    id: string;
    role: string;
    isProfileCompleted: boolean;
    isEmailVerified: boolean;
  }) {
    return jwt.sign(
      {
        sub: user.id,
        role: user.role,
        isProfileCompleted: user.isProfileCompleted,
        isEmailVerified: user.isEmailVerified,
      },
      this.secret,
      { expiresIn: '15m' }
    );
  }

  verifyAccessToken(token: string): AccessTokenPayload {
    const res = jwt.verify(token, this.secret) as AccessTokenPayload;
    return res;
  }

  decodeAccessToken(token: string) {
    return jwt.decode(token);
  }
}

export const jwtService = new JwtServices(process.env.JWT_SECRET!);
