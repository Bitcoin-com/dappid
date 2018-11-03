export default class DAppID {
    encodeBDIP2(txType: string, txVersion: string, appType: string, name: string, protocolSpec: string, url: string, metaData: string): string;
    decodeBDIP2(dappid: string): object;
}
