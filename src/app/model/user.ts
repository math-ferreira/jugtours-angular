export class User {
    id: number | null;
    name: string;
    email: string;
    
    constructor(group: Partial<User> = {}) {
      this.id = group?.id || null;
      this.name = group?.name || '';
      this.email = group?.email || '';
    }
  }