import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoginUserDto, RegisterUserDto } from './dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.register.user')
  registerUser(@Payload() request: RegisterUserDto) {
        return this.authService.registerUser(request);
  }

  @MessagePattern('auth.login.user')
  loginUser(@Payload() loginUserDto: LoginUserDto) {
    console.log('llego aqui');
    return this.authService.loginUser( loginUserDto );
  }

  @MessagePattern('auth.verify.user')
  verifyToken( @Payload() token: string ) {
    return this.authService.verifyToken(token)
  }

}
