// ------------ 通用工具类型

type Recordable = Record<string, any>;

// ------------ 消息通知

type Toast = {
  id: string;
  type: "success" | "info" | "warning" | "error";
  message: string;
  duration?: number;
  lifecycle?: "beforeEnter" | "entered" | "beforeExit";
};

// ------------ 通用请求

type Resp = {
  statusCode: number;
  message: string;
};

type RespWithpage = Resp & {
  page: number;
  pageSize: number;
  pages: number;
};

// ------------ 用户相关

type User = {
  id: number;
  name: string;
};

// ------------ 每日一句

type Shanbay = {
  content: string;
  translation: string;
  author: string;
  image: string;
  href: string;
};

type ShanbayResp = Resp & Shanbay;

// ------------ 文章

type Blog = {
  id: string;
  title: string;
  visibility: number;
  updated: number;
  minutes?: number;
  content?: string;
};

type BlogsParams = {
  page?: number;
  pageSize?: number;
};

type BlogsResp = RespWithpage & {
  blogs: Blog[];
};

type BlogResp = Resp & Blog;

type BlogMutationBody = {
  id: string;
  visibility?: number;
  banner?: string;
};

// ------------ 番剧

type Anime = {
  id: string;
  title: string;
  cate: string;
  eps: number;
  episodes?: string[];
  updated: number;
};

type AnimesParams = {
  page?: number;
  pageSize?: number;
};

type AnimesResp = RespWithpage & {
  animes: Anime[];
};

type AnimeResp = Resp & Anime;

type AnimeMutationBody = {
  id: string;
  banner?: string;
};