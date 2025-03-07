// client/services/authBridge.ts
interface AuthImplementation {
  login(email: string, password: string): Promise<boolean>;
}

export class MockAPIAuth implements AuthImplementation {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      // Buscar usuario existente
      const response = await fetch(`${this.baseURL}?email=${email}`);
      const users = await response.json();

      if (users.length === 0) return false;
      const user = users[0];

      return user.password === password;
    } catch (error) {
      return false;
    }
  }
}

export class AuthBridge {
  constructor(private implementation: AuthImplementation) {}

  async login(email: string, password: string): Promise<boolean> {
    return this.implementation.login(email, password);
  }
}
