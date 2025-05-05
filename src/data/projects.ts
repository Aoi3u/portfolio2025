export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  url: string;
  github: string;
  challenges: string;
  learnings: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "タスク管理アプリ",
    slug: "task-management-app",
    description:
      "LaravelでのCRUD操作習得のために作成した簡易タスク管理アプリ。",
    detailedDescription:
      "このプロジェクトでは、Laravelの基本的なCRUD操作を学ぶために、シンプルなタスク管理アプリケーションを開発しました。タスクの作成・編集・削除など基本的な機能を実装しています。",
    technologies: ["Laravel", "MySQL", "Tailwind CSS"],
    image: "/img/ToDo.png",
    url: "https://laravel-to-do.vercel.app/tasks",
    github: "https://github.com/Aoi3u/Laravel_ToDo",
    challenges:
      "デプロイ先にvercelを選んだため、Laravelのデプロイに関する知識が必要でした。特に、環境変数の設定やデータベース接続の設定に苦労しました。",
    learnings:
      "このプロジェクトを通して、MVCアーキテクチャの理解を深め、Laravelのエコシステムについて学ぶことができました。",
  },
  {
    id: 2,
    title: "ブログアプリ",
    slug: "blog-app",
    description: "Next.jsを用いて作成したブログアプリ。",
    detailedDescription:
      "Markdownでの記事管理とSupabaseを利用したデータストレージを特徴とするブログプラットフォームです。認証機能や記事のCRUD、コメント機能等を実装しています。",
    technologies: [
      "Next.js",
      "TypeScript",
      "prisma",
      "Supabase",
      "Tailwind CSS",
    ],
    image: "/img/Blog.png",
    url: "https://tech-notes-waseda.vercel.app/",
    github: "https://github.com/Aoi3u/next-blog",
    challenges: "DBのテーブル設計に苦労しました。",
    learnings: "Next.jsやDBの理解が深まりました。",
  },
];
