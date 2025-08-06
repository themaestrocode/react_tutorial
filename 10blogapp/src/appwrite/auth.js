import config from '../config/config.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService{
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Your Appwrite Endpoint
      .setProject(config.appwriteProjectId); // Your Appwrite Project ID

    this.account = new Account(this.client);
  }

  async createAccount({email, password, name}) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);

      if (userAccount) {
        return this.login({email, password});
      } else {
        throw new Error('Account creation failed');
      }
    } catch (error) {
      console.error('Appwrite Service :: createAccount() :: ', error);
      throw error;
    }
  }

  async login({email, password}) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error('Appwrite Service :: login() :: ', error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error('Appwrite Service :: getCurrentUser() :: ', error);
      // throw error;
    }
    return null; // Return null if user is not authenticated
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error('Appwrite Service :: logout() :: ', error);
      throw error;
    } 
  }
}

const authService = new AuthService();
export default authService;
