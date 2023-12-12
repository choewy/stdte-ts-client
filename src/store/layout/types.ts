export type LayoutStoreProps = {
  size: { innerWidth: number; innerHeight: number };
  theme: { color: string };
  helmet: { title: string };
  header: { title: string };
  sidebar: { open: boolean };
};
