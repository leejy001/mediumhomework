import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { currentState } from "../../recoil";
import { fadeInRight, pulse } from "../../style/Animation";

function BridgeTutorial() {
  const current = useRecoilValue(currentState);

  return (
    <TutorialContainer>
      <TutorialItem isCurrent={current === 1}>
        <strong>1</strong>
        <ul>
          <li>Select a coin to convert.</li>
        </ul>
      </TutorialItem>
      <TutorialItem isCurrent={current === 2}>
        <strong>2</strong>
        <ul>
          <li>
            Select Chains and Connect a Wallet. <br /> Both From Wallet and To
            wallet should be connected.
          </li>
        </ul>
      </TutorialItem>
      <TutorialItem isCurrent={current === 3}>
        <strong>3</strong>
        <ul>
          <li>
            Enter amount and click convert button. <br /> Follow guidance and
            Proceed approval process.
          </li>
        </ul>
      </TutorialItem>
      <TutorialItem isCurrent={current === 4}>
        <strong>4</strong>
        <ul>
          <li>Confirm transaction in your From wallet.</li>
          <li>Converting coin please wait a moment.</li>
          <li>Confirm transaction in your To wallet.</li>
        </ul>
      </TutorialItem>
    </TutorialContainer>
  );
}

export default BridgeTutorial;

const TutorialContainer = styled.aside`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  animation-delay: 100ms;
  animation: ${fadeInRight} 1s ease;
`;

const TutorialItem = styled.div<{ isCurrent: boolean }>`
  position: relative;
  width: 238px;
  padding: 24px;
  margin-right: 16px;
  background: ${({ theme }) => theme.color.COLOR_DARK_GREEN};
  border-radius: 8px;
  strong {
    position: absolute;
    top: 50%;
    left: -14px;
    margin-top: -14px;
    width: 28px;
    height: 28px;
    border-radius: 15px;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    ${(props) =>
      props.isCurrent
        ? css`
            background: white;
            color: ${({ theme }) => theme.color.COLOR_GREEN_ONE};
            animation: ${pulse} 1s infinite;
          `
        : css`
            background: ${({ theme }) => theme.color.COLOR_GREEN_ONE};
            color: white;
          `}
  }
  :not(:first-child) {
    margin-top: 40px;
    ::before {
      content: "";
      position: absolute;
      top: -30px;
      left: 50%;
      margin-left: -40%;
      width: 80%;
      height: 20px;
      border: 1px dashed rgba(255, 255, 255, 0.5);
      border-width: 0 1px;
    }
  }
  li {
    ${(props) =>
      props.isCurrent
        ? css`
            color: white;
            font-size: 15px;
            font-wegiht: bolder;
          `
        : css`
            color: ${({ theme }) => theme.color.COLOR_LIGHT_GREEN};
            font-size: 13px;
            font-wegiht: normal;
          `}
    line-height: 1.54;
    word-break: keep-all;
  }
  li + li {
    margin-top: 12px;
    padding-top: 16px;
    border-top: 1px dotted rgba(255, 255, 255, 0.1);
  }
`;

function useRecoilValueState(dropdownState: any): [any, any] {
  throw new Error("Function not implemented.");
}
