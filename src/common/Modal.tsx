import React from 'react';
import styled from 'styled-components';

type PropsType = {
  width: number;
  title: string;
  subTitle: string;
  isDisabled: boolean;
  handleToggle: () => void;
  handleOkClick: () => void;
};

function Index({
  width,
  title,
  subTitle,
  isDisabled,
  handleToggle,
  handleOkClick,
  children
}: React.PropsWithChildren<PropsType>) {

    const handlePayModalOff = (e: any) => {
        if (e.target !== e.currentTarget) return;
        else handleToggle()
    };

    return (
        <BodyWrapper onClick={handlePayModalOff}>
            <ModalWrapper width={width}>
                <ModalHeader>
                    <MainTitleWrapper>
                        <p className='main-title'>{title}</p>
                        <button className='close-btn' type="button" onClick={handleToggle}>
                            <img src={"/assets/modal-close.svg"} alt="close button"  width={12}/>
                        </button>
                    </MainTitleWrapper>
                    <p className='sub-title'>{subTitle}</p>
                </ModalHeader>
                <ModalBody>{children}</ModalBody>
                <ModalFooter isDisabled={isDisabled}>
                    <button className='ok-btn' onClick={handleOkClick} disabled={isDisabled}>Select</button>
                </ModalFooter>
            </ModalWrapper>
        </BodyWrapper>
    );
}

export default Index;

const BodyWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

const ModalWrapper = styled.div<{width: number}>`
    background-color: white;
    border-radius: 8px;
    width: ${({ width }) => width}px;
    padding: 12px 16px;
    z-index: 1100;
    margin: 0 auto;
`;

const ModalHeader = styled.div`
    align-items: center;
    width: 100%;
    padding: 16px 16px 0;
    .sub-title {
        color: ${({theme}) => theme.color.FONT_GRAY };
        font-size: 14px;
        font-weight: 400;
    }
    .close-btn {
        background: white;
        border: none;
    }
`;

const MainTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 12px;
    .main-title {
        font-size: 18px;
        font-weight: 500;
    }
`

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

const ModalFooter = styled.div<{isDisabled: boolean}>`
    padding: 0px 16px 16px;
    .ok-btn {
        width: 100%;
        height: 58px;
        border: none;
        border-radius: 4px;
        background-color: ${({theme}) => theme.color.COLOR_GREEN_ONE };
        color: white;
        cursor: pointer;
        pointer-events: ${({isDisabled}) => isDisabled ? 'none' : 'default'};
        :hover {
            background-color: ${({theme}) => theme.color.COLOR_DARK_GREEN };
        }
        :disabled {
            cursor: default;
            opacity: 0.5;
        }
    }
`