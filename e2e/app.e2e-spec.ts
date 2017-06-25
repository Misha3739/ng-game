import { NgGamePage } from './app.po';

describe('ng-game App', () => {
  let page: NgGamePage;

  beforeEach(() => {
    page = new NgGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
