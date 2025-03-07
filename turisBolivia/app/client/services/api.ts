import AsyncStorage from "@react-native-async-storage/async-storage";

class APIClient {
  private static instance: APIClient;
  private baseURL =
    "https://67c9ba3a102d684575c34ee8.mockapi.io/api/turis/client";

  private constructor() {}

  public static getInstance(): APIClient {
    if (!APIClient.instance) {
      APIClient.instance = new APIClient();
    }
    return APIClient.instance;
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}?email=${email}`);
      const users = await response.json();

      if (users.length === 0) return false;
      const user = users[0];

      if (user.password === password) {
        await AsyncStorage.setItem("currentUser", JSON.stringify(user));
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async getClient(id: string) {
    const response = await fetch(`${this.baseURL}/${id}`);
    return response.json();
  }

  async createClient(data: any) {
    const response = await fetch(this.baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async updateClient(id: string, data: any) {
    const response = await fetch(`${this.baseURL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async deleteClient(id: string) {
    const response = await fetch(`${this.baseURL}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  }
}

export const api = APIClient.getInstance();
