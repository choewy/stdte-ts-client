export type DialogStoreProps = {
  mypage: {
    updatePassword: { open: boolean };
  };
  credentials: {
    updatePassword: { id: number; open: boolean };
  };
  role: {
    create: { open: boolean };
    users: { id: number; open: boolean };
    update: { id: number; open: boolean };
    delete: { id: number; open: boolean };
  };
};
