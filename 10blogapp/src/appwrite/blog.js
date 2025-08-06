import { Client, Databases, Query, ID } from 'appwrite';
import config from '../config/config.js';

export class BlogService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl) // Your Appwrite Endpoint
      .setProject(config.appwriteProjectId); // Your Appwrite Project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug)
    } catch (error) {
      console.error('Blog Service :: getPost() :: ', error);
      return null;
    }
  }

  async getPosts(queries = [Query.equal('status', 'active')]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error('Blog Service :: getPosts() :: ', error);
      return false;
    }
  }

  async createPost({ title, content, slug, status, featureImage, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featureImage,
          userId
        }
      );
    } catch (error) {
      console.error('Blog Service :: createPost() :: ', error);
      return false;
    }
  }

  async updatePost(slug, { title, content, status, featureImage }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          status,
          featureImage
        }
      );
    } catch (error) {
      console.error('Blog Service :: updatePost() :: ', error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error('Blog Service :: deletePost() :: ', error);
      return false;
    }
  }

  // storage service methods
  async uploadFile(file) {
    try {
      const response = await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
      return response.$id; // Return the file ID
    } catch (error) {
      console.error('Blog Service :: uploadFile() :: ', error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        config.appwriteBucketId,
        fileId
      );
      return true;
    } catch (error) {
      console.error('Blog Service :: deleteFile() :: ', error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      config.appwriteBucketId,
      fileId
    ).href;
  }

}

const blogService = new BlogService();
export default blogService;
