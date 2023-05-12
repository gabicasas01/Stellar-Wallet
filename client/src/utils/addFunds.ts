export const fundAccount = async (publicKey: string) => {
  try {
    const response = await fetch(
      `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`,
    );
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error('Error funding account:', error);
    throw new Error('Failed to add funds in Stellar account');
  }
};
