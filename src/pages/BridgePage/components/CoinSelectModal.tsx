import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import styled from "styled-components";
import Modal from "../../../common/Modal";
import { coinState, CoinTypes } from "../../../recoil";

type PropTypes = {
  handleToggle: () => void;
};

const CoinInfo = [{ id: 1, coin: "KOK", img: "/assets/kok.png" }];

function CoinSelectModal({ handleToggle }: PropTypes) {
  const [item, setItem] = useRecoilState(coinState);
  const resetCoin = useResetRecoilState(coinState);
  const [coin, setCoin] = useState<string>(item.coin);

  const handleCoinClick = (value: string) => {
    if (item.coin === "") {
      setCoin(value);
    } else if (item.coin !== "") {
      setCoin("");
    }
  };

  const handleOkClick = () => {
    setItem((item: CoinTypes) => (item = { ...item, coin }));
    handleToggle();
  };

  useEffect(() => {
    return () => {
      if (coin === "") resetCoin();
    };
  }, [resetCoin, coin]);

  return (
    <Modal
      width={400}
      title={"Select a coin"}
      subTitle={"Select a coin to convert."}
      handleToggle={handleToggle}
      handleOkClick={handleOkClick}
      isDisabled={coin === ""}
    >
      <CoinSelectWrapper>
        {CoinInfo.map((item) => (
          <CoinCard
            key={item.id}
            onClick={() => handleCoinClick(item.coin)}
            isSelected={coin === item.coin}
          >
            <img src={item.img} alt={item.coin} width={40} />
            <strong>{item.coin}</strong>
          </CoinCard>
        ))}
      </CoinSelectWrapper>
    </Modal>
  );
}

export default CoinSelectModal;

const CoinSelectWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const CoinCard = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${({ isSelected, theme }) =>
    isSelected ? `${theme.color.COLOR_LIGHT_GREEN}` : "white"};
  cursor: pointer;
  width: 84px;
  height: 86px;
  img {
    margin: 10px;
  }
  strong {
    font-size: 12px;
    margin-bottom: 10px;
  }
  :hover {
    background: ${({ theme }) => theme.color.COLOR_LIGHT_GREEN};
  }
  :active {
    background: ${({ theme }) => theme.color.COLOR_GREEN_THREE};
  }
`;
