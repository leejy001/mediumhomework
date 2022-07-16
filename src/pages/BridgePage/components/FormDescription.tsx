import styled from "styled-components"

function FormDescription() {
    return (
        <DescriptContainer>
            <li>K STADIUM bridge supports wallet to wallet transmission. The transaction will be completed after final confirmation from the wallet connected to the bridge.</li>
            <li>Please check the tax and bridging fee before proceeding.</li>
            <li>When the conversion begins, please go to the wallet, check the balance and approve conversion.</li>
            <li>If you want to convert more than 20,000 KOK, please contact us through the K STADIUM Help Center before proceeding with the conversion.</li>
        </DescriptContainer>
    )
}

export default FormDescription

const DescriptContainer = styled.ul`
    padding: 16px 20px;
    background: ${({theme}) => theme.color.COLOR_LIGHT_GREEN};
    border-radius: 4px;
    li {
        display: flex;
        position: left;
        margin: 0;
        padding: 6px 0;
        line-height: 18px;
        font-size: 13px;
        font-weight: 400;
        color: ${({theme}) => theme.color.FONT_DARK_GRAY};
        ::before {
            content: "•";
            margin-right: 12px;
            color: ${({theme}) => theme.color.COLOR_GREEN_ONE};
            font-weight: 600;
            font-size: 11px;
        }
    }
`