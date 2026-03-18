import jwt, { JwtPayload } from 'jsonwebtoken';

interface AccessTokenPayload extends JwtPayload {
  sub: string;
  role: string;
}

class JwtServices {
  private readonly secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  generateAccessToken(user: { id: string; role: string; isProfileCompleted: boolean }) {
    return jwt.sign(
      {
        sub: user.id,
        role: user.role,
        isProfileCompleted: user.isProfileCompleted
      },
      this.secret,
      { expiresIn: '15m' }
    );
  }

  verifyAccessToken(token: string): AccessTokenPayload {
    return jwt.verify(token, this.secret) as AccessTokenPayload;
  }

  decodeAccessToken(token: string){
    return jwt.decode(token)
  }
}

export const jwtService = new JwtServices(process.env.JWT_SECRET!);
