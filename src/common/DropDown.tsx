import { useCallback, useEffect, useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { dropdownState } from "../recoil";
import { slideInDown } from "../style/Animation";

type ListType = {
  id: number;
  content: string;
};

type PropTypes = {
  id: string;
  initialState: string;
  info?: ListType[];
  isDisabled?: boolean;
  width?: number;
  isNone: boolean;
  onToggle?: () => void;
};

function DropDown({
  id,
  initialState,
  info,
  isDisabled,
  width,
  isNone,
  onToggle,
}: PropTypes) {
  const dropdownRef = useRef<HTMLUListElement>(null);

  const [isActive, setIsActive] = useOutsideClick(dropdownRef, false);
  const [toggle, setToggle] = useRecoilState(dropdownState);
  const resetToggle = useResetRecoilState(dropdownState);

  const onClickBtn = useCallback(
    (event: React.MouseEvent) => {
      event?.stopPropagation();
      setIsActive((prev) => !prev);
      setToggle((state) => (state = id));
    },
    [id, setIsActive, setToggle]
  );

  useEffect(() => {
    if (toggle !== id) setIsActive(false);
  }, [toggle, id, setIsActive, resetToggle]);

  return (
    <DropDownContainer width={width}>
      <DropDownButton
        isActive={isActive}
        onClick={onClickBtn}
        disabled={isDisabled}
      >
        <span>{initialState}</span>
        <img src="/assets/i-carot.png" alt="caret icon" width={18} />
      </DropDownButton>
      {isActive && (
        <InfoWrapper ref={dropdownRef}>
          {info &&
            info.map((item) => {
              if (item.content !== "divide")
                return (
                  <InfoItem key={item.id} isNone={isNone} onClick={onToggle}>
                    {item.content}
                  </InfoItem>
                );
              else return <li key={item.id} className="divider" />;
            })}
        </InfoWrapper>
      )}
    </DropDownContainer>
  );
}

export default DropDown;

const DropDownContainer = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  z-index: 100;
`;

const InfoWrapper = styled.ul`
  animation: ${slideInDown} 0.5s ease;
  padding: 5px;
  text-align: left;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 0 2px rgba(13, 127, 233, 0.4);
  width: 100%;
  .divider {
    margin: 5px auto;
    border-top: 1px solid ${({ theme }) => theme.color.COLOR_GREEN_THREE};
  }
`;

const InfoItem = styled.li<{ isNone: boolean }>`
  ${({ isNone }) =>
    isNone
      ? css`
          cursor: not-allowed;
          color: gray;
        `
      : css`
          cursor: default;
          :hover {
            background: ${({ theme }) => theme.color.COLOR_LIGHT_GREEN};
            color: ${({ theme }) => theme.color.COLOR_GREEN_ONE};
          }
        `}
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  padding: 0 10px;
`;

const DropDownButton = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ isActive, theme }) =>
    isActive ? `${theme.color.COLOR_LIGHT_GREEN}` : "white"};
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.COLOR_GREEN_THREE};
  color: ${({ theme }) => theme.color.COLOR_GREEN_ONE};
  cursor: pointer;
  padding: 12px 16px;
  width: 100%;
  height: 100%;
  span {
    font-size: 14px;
    font-weight: 600;
  }
  :hover {
    transition: all 0.3s;
    background: ${({ theme }) => theme.color.COLOR_LIGHT_GREEN};
  }
  :disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
  :active {
    color: white;
  }
  :focus {
    outline: none !important;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.color.COLOR_GREEN_TWO};
  }
`;
