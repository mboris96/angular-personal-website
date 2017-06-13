import { AngularPersonalWebsitePage } from './app.po';

describe('angular-personal-website App', () => {
  let page: AngularPersonalWebsitePage;

  beforeEach(() => {
    page = new AngularPersonalWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Matthew Boris\' Personal Website!!');
  });
});
