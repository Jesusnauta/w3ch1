import { Character } from './characters';

describe('Given the class Character', () => {
  describe('When we create a new character', () => {
    test('If we ask if we have "name" property, it should return true', () => {
      const character1 = new Character('Tomas', 'Lannister', 40);
      const expected = 'name';
      expect(character1).toHaveProperty(expected);
    });
    test('If we ask if we have "family" property, it should return true', () => {
      const character1 = new Character('Tomas', 'Lannister', 40);
      const expected = 'family';
      expect(character1).toHaveProperty(expected);
    });
    test('If we ask if we have "age" property, it should return true', () => {
      const character1 = new Character('Tomas', 'Lannister', 40);
      const expected = 'age';
      expect(character1).toHaveProperty(expected);
    });
  });
});