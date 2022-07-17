import styled from "styled-components";
import Modal from "../../../common/Modal"

type PropTypes = {
    handleToggle: () => void;
}

function ExchangeFromModal({handleToggle} : PropTypes) {
    return (
        <Modal width={370} title={'Connect Wallet'} subTitle={'Please connect your wallet to the chain you chose.'} handleToggle={handleToggle} handleOkClick={handleToggle} isDisabled={true}>
            <WalletWrapper>
                <WalletItem>
                    <img src="/assets/Metamask-icon.svg" alt="metamask icon" width={118} height={118}/>
                    <strong>MetaMask</strong>
                </WalletItem>
                <Hint>
                    You don't have Wallet? Download one now
                </Hint>
                <DownLoadLink href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank" rel="noreferrer">
                    <img src="/assets/i-download.png" alt="download icon" width={14}/>
                    <p>Download</p>
                </DownLoadLink>
            </WalletWrapper>
        </Modal>
    )
}

export default ExchangeFromModal

const WalletWrapper = styled.div`
    width: 170px;
    margin: 12px auto;
    text-align: center;
`

const WalletItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
    border: 1px solid ${({theme}) => theme.color.COLOR_GREEN_THREE};
    border-radius: 8px;
    strong {
        margin-top: 10px;
        font-size: 16px;
    }
`

const Hint = styled.div`
    color: ${({theme}) => theme.color.COLOR_GREEN_ONE};
    font-size: 14px;
    padding: 6px 12px;
    margin-top: 12px;
    line-height: 1.65;
    word-break: keep-all;
`

const DownLoadLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({theme}) => theme.color.COLOR_DARK_GREEN};
    height: 28px;
    line-height: 28px;
    p {
        padding: 5px;
    }
`