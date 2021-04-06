// Under test file
import getImagePickerOptions from '../index';

describe('Image Picker commons', () => {
  it('should get the list option', () => {
    expect(getImagePickerOptions()).toHaveLength(3);
  });
});
