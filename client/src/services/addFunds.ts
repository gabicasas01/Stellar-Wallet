export const fundAccount = async (publicKey: string) => {
  try {
    const response = await fetch(
      `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`,
    );
    return await response.json();
  } catch (error) {
    throw new Error('Failed to add funds in Stellar account');
  }
};
