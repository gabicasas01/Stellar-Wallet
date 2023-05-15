import { fundAccount } from "../utils/addFunds";

describe('fundAccount', () => {
    it('should fund the account successfully', async () => {
      const publicKey = 'GABCDEF1234567890';
      const expectedResponse = { success: true };
  
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(expectedResponse),
        });
      });
  
      const response = await fundAccount(publicKey);
  
      expect(response).toEqual(expectedResponse);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`,
      );
    });
  
    it('should throw an error if the account funding fails', async () => {
      const publicKey = 'GABCDEF1234567890';
      const expectedError = new Error('Failed to add funds in Stellar account');
  
      global.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(expectedError);
      });
  
      await expect(fundAccount(publicKey)).rejects.toThrow(expectedError);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`,
      );
    });
  });