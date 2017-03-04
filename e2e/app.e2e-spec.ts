import { CustompipesPage } from './app.po';

describe('custompipes App', function() {
  let page: CustompipesPage;

  beforeEach(() => {
    page = new CustompipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
