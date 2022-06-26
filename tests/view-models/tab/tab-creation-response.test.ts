import { TabDTO } from '@services/server/tab/tab-dto';
import { TabCreationResponse } from '@view-models/tab/tab-creation-response';

describe(TabCreationResponse.name, () => {
  describe('constructor', () => {
    it('should create an instance when all the required fields are given', () => {
      const numberOfStrings = 6;
      const initialSpacing = 1;
      const tabBlockLength = 15;
      const instructions = '1-0';
      const renderedTab: string[][] = [[]];

      const tabCreationResponse = new TabCreationResponse({
        numberOfStrings,
        initialSpacing,
        tabBlockLength,
        instructions,
        renderedTab,
      });

      expect(tabCreationResponse.title).toBe(null);
      expect(tabCreationResponse.observations).toBe(null);
      expect(tabCreationResponse.numberOfStrings).toBe(numberOfStrings);
      expect(tabCreationResponse.initialSpacing).toBe(initialSpacing);
      expect(tabCreationResponse.tabBlockLength).toBe(tabBlockLength);
      expect(tabCreationResponse.instructions).toBe(instructions);
      expect(tabCreationResponse.renderedTab).toBe(renderedTab);
    });

    it('should create an instance when the field title is given with all the required fields', () => {
      const title = 'some title';
      const numberOfStrings = 6;
      const initialSpacing = 1;
      const tabBlockLength = 15;
      const instructions = '1-0';
      const renderedTab: string[][] = [[]];

      const tabCreationResponse = new TabCreationResponse({
        title,
        numberOfStrings,
        initialSpacing,
        tabBlockLength,
        instructions,
        renderedTab,
      });

      expect(tabCreationResponse.title).toBe(title);
      expect(tabCreationResponse.observations).toBe(null);
      expect(tabCreationResponse.numberOfStrings).toBe(numberOfStrings);
      expect(tabCreationResponse.initialSpacing).toBe(initialSpacing);
      expect(tabCreationResponse.tabBlockLength).toBe(tabBlockLength);
      expect(tabCreationResponse.instructions).toBe(instructions);
      expect(tabCreationResponse.renderedTab).toBe(renderedTab);
    });

    it('should create an instance when the field observations is given with all the required fields', () => {
      const observations = 'some observations';
      const numberOfStrings = 6;
      const initialSpacing = 1;
      const tabBlockLength = 15;
      const instructions = '1-0';
      const renderedTab: string[][] = [[]];

      const tabCreationResponse = new TabCreationResponse({
        observations,
        numberOfStrings,
        initialSpacing,
        tabBlockLength,
        instructions,
        renderedTab,
      });

      expect(tabCreationResponse.title).toBe(null);
      expect(tabCreationResponse.observations).toBe(observations);
      expect(tabCreationResponse.numberOfStrings).toBe(numberOfStrings);
      expect(tabCreationResponse.initialSpacing).toBe(initialSpacing);
      expect(tabCreationResponse.tabBlockLength).toBe(tabBlockLength);
      expect(tabCreationResponse.instructions).toBe(instructions);
      expect(tabCreationResponse.renderedTab).toBe(renderedTab);
    });
  });

  describe(TabCreationResponse.createFromTabDTO.name, () => {
    it(`should create an instance from a ${TabDTO.name}`, () => {
      const tab = new TabDTO({
        initialSpacing: 1,
        instructions: '1-0',
        numberOfStrings: 6,
        renderedTab: [[]],
        tabBlockLength: 15,
      });

      const tabCreationResponse = TabCreationResponse.createFromTabDTO(tab);

      expect(tabCreationResponse.title).toBe(tab.title);
      expect(tabCreationResponse.observations).toBe(tab.observations);
      expect(tabCreationResponse.numberOfStrings).toBe(tab.numberOfStrings);
      expect(tabCreationResponse.initialSpacing).toBe(tab.initialSpacing);
      expect(tabCreationResponse.tabBlockLength).toBe(tab.tabBlockLength);
      expect(tabCreationResponse.instructions).toBe(tab.instructions);
      expect(tabCreationResponse.renderedTab).toBe(tab.renderedTab);
    });
  });
});
