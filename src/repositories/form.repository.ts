import type { LoginData, UserData } from '../types/index.js';

/**
 * Repositorio para manejo de usuarios
 * Implementación en memoria para demostración
 */
export class UserRepository {
  private users: Map<string, UserData & { password: string }> = new Map();

  constructor() {
    // Usuarios de prueba
    this.users.set('admin@example.com', {
      email: 'admin@example.com',
      name: 'Administrador',
      password: 'admin123',
    });
    this.users.set('user@example.com', {
      email: 'user@example.com',
      name: 'Usuario Demo',
      password: 'user123',
    });
  }

  /**
   * Registra un nuevo usuario
   * @param data - Datos del login más el nombre
   * @returns Datos del usuario registrado
   */
  async register(data: LoginData & { name: string }): Promise<UserData> {
    const userData: UserData & { password: string } = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    
    this.users.set(data.email, userData);
    
    // Retornar sin la contraseña
    return {
      email: userData.email,
      name: userData.name,
    };
  }

  /**
   * Busca un usuario por email
   * @param email - Email a buscar
   * @returns Datos del usuario con password o null si no existe
   */
  async findByEmail(email: string): Promise<(UserData & { password: string }) | null> {
    const user = this.users.get(email);
    return user ?? null;
  }

  /**
   * Obtiene todos los usuarios
   * @returns Array de usuarios sin contraseñas
   */
  async findAll(): Promise<UserData[]> {
    return Array.from(this.users.values()).map(user => ({
      email: user.email,
      name: user.name,
    }));
  }

  /**
   * Elimina un usuario por email
   * @param email - Email del usuario a eliminar
   * @returns true si se eliminó, false si no existía
   */
  async deleteByEmail(email: string): Promise<boolean> {
    return this.users.delete(email);
  }

  /**
   * Obtiene el número total de usuarios
   * @returns Cantidad de usuarios
   */
  async count(): Promise<number> {
    return this.users.size;
  }
}
