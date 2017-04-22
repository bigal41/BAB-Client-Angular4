import { BallAboveAllClientAngularV4Page } from './app.po';

describe('ball-above-all-client-angular-v4 App', () => {
  let page: BallAboveAllClientAngularV4Page;

  beforeEach(() => {
    page = new BallAboveAllClientAngularV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
