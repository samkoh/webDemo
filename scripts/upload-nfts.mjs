import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

(async () => {
    const drop = await sdk.getContract(
        "0x9cd89f39d38821e9162b9ab689Afb3226D682AC1",
        "nft-drop"
    );

    try {
        await drop.createBatch([
            "https://my-json-server.typicode.com/samkoh/webDemo/nfts/0",
            "https://my-json-server.typicode.com/samkoh/webDemo/nfts/1",
        ]);
        console.log("uploaded all nfts");
    } catch (error) {
        console.log(error);
    }
})();