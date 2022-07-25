import {StorageService} from "@src/services/storageService";
import AuthService from "@src/services/authService";
import CategoryService from "@src/services/categoriesService";
import PostService from "@src/services/postsService";
import AdminService from "@src/services/adminService"



export const storageService = new StorageService()
export const authService = new AuthService()
export const categoriesService = new CategoryService()
export const postsService = new PostService()
export const adminService = new AdminService()
