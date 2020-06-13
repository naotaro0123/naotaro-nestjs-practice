// import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService, PublicItem } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  // beforeEach(async () => {
  //   const app: TestingModule = await Test.createTestingModule({
  //     controllers: [AppController],
  //     providers: [AppService],
  //   }).compile();

  //   appController = app.get<AppController>(AppController);
  // });
  beforeEach(async () => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('/items', () => {
    it('should return public items', () => {
      jest.spyOn(appService, 'getPublicItems').mockImplementation(() => {
        const item: PublicItem = {
          id: 1,
          title: 'Mock Title',
          body: 'Mock Body'
        };
        return [item];
      });
      expect(appController.getItems()).toHaveLength(1);
    })
  })
  // describe('root', () => {
  //   it('should return "Hello World!"', () => {
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  //   it('should return Item list', () => {
  //     expect(appController.getItems()).toHaveLength(2);
  //   })
  // });
});
