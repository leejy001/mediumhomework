import { atom } from "recoil";

export type CoinTypes = {
  coin: string;
  from: string;
  to: string;
};

export const currentState = atom({
  key: "currentState",
  default: 1,
});

export const dropdownState = atom({
  key: "dropdownState",
  default: "",
});

export const coinState = atom<CoinTypes>({
  key: "coinState",
  default: {
    coin: "",
    from: "",
    to: "",
  },
});
