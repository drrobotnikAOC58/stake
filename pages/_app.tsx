import { Pulsechain } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = new ThirdwebSDK(Pulsechain, {
  clientId: "",

const sdk = new ThirdwebSDK(Pulsechain, {
  secretKey: "",
});

const contract = await sdk.getContract("");
