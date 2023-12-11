import { v4 } from 'uuid';
import { RecoilState, atom, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

export class RecoilStore<T> {
  private readonly instance: RecoilState<T>;

  constructor(private readonly key: string, private readonly init: T) {
    this.key = [key, v4()].join('-');
    this.instance = atom({ key, default: init });
  }

  useKey() {
    return this.key;
  }

  useInit() {
    return this.init;
  }

  useValue() {
    return useRecoilValue(this.instance);
  }

  useState() {
    return useRecoilState(this.instance);
  }

  useSetState() {
    return useSetRecoilState(this.instance);
  }

  useResetState() {
    return useResetRecoilState(this.instance);
  }
}
