import { RecoilState, atom, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

export class RecoilStore<T> {
  private readonly store: RecoilState<T>;

  constructor(key: string, value?: T) {
    this.store = atom({ key, default: value });
  }

  public useValue() {
    return useRecoilValue(this.store);
  }

  public useState() {
    return useRecoilState(this.store);
  }

  public useSetState() {
    return useSetRecoilState(this.store);
  }

  public useResetState() {
    return useResetRecoilState(this.store);
  }
}
