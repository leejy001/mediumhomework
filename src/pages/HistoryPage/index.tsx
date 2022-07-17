import styled from "styled-components"
import Contianer from "../../common/Container"
import { fadeIn } from "../../style/Animation"

function HistoryPage() {
    return (
        <Contianer>
            <WalletConnectInfo>
                <img src="/assets/i-attach.png" alt="attch icon" width={80} />
                <p className="warn-descript" >Your Wallet should be connected.</p>
                <p className="hint-descript" >Connect Your Wallet</p>
            </WalletConnectInfo>
        </Contianer>
    )
}

export default HistoryPage

const WalletConnectInfo = styled.div`
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    padding: 40px;
    width: 1200px;
    background: #fff;
    border-radius: 8px;
    color: ${({theme}) => theme.color.FONT_DARK_GRAY};
    animation: ${fadeIn} 1s ease;
    .warn-descript {
        font-size: 24px;
        margin: 6px auto 12px;
    }
    .hint-descript {
        margin-bottom: 24px;
        font-size: 16px;
    }
`