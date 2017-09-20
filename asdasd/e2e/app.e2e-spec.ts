import { CjdsPage } from './app.po';

describe('cjds App', () => {
  let page: CjdsPage;

  beforeEach(() => {
    page = new CjdsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
