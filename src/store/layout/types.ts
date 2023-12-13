export type LayoutStoreProps = {
  loading: boolean;
  size: { innerWidth: number; innerHeight: number };
  theme: string | 'dark' | 'light';
  helmet: { title: string };
  header: { title: string };
  sidebar: { open: boolean };
};
