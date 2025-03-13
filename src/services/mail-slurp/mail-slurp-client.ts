import { MailSlurp } from "mailslurp-client";

export class EmailClient {
  private clientInstance!: MailSlurp;
  private apiKey!: string;

  getClient() {
    this.clientInstance = this.clientInstance ? this.clientInstance : new MailSlurp({ apiKey: this.getApiKey() });
    return this.clientInstance;
  }

  private getApiKey = () => {
    this.apiKey = this.apiKey ? this.apiKey : "16fd2b4e3f9e51472dc67ce39b15ec7e0cf4660fb9068a4b63dcc8418cc73161";
    return this.apiKey;
  };
}
