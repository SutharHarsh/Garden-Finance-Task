import {
    BitcoinOTA,
    BitcoinProvider,
    BitcoinNetwork,
} from "@catalogfi/wallets";
import { JsonRpcSigner, BrowserProvider } from "ethers";
declare global{
    interface Window{
        ethereum: any;
    }
}

(async () => {
    try {
        const provider = new BitcoinProvider(BitcoinNetwork.Mainnet);
        const signer = await new BrowserProvider(window.ethereum).getSigner();
        const ota = new BitcoinOTA(provider, signer);
        console.log('Bitcoin OTA created successfully:', ota);
    } catch (error) {
        console.error('Error creating Bitcoin OTA:', error);
    }
})();
