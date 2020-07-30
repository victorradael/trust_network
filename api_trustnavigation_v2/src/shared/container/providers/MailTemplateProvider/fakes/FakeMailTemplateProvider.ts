import IMailTeamplateProvider from '../models/IMailTemplateProvider';

export default class FakeMailTemplateProvider
  implements IMailTeamplateProvider {
  public async parse(): Promise<string> {
    return 'Email content';
  }
}
