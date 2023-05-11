export const fundAccount = async (publicKey: string, amount: number) => {
  try {
    const response = await fetch(
      `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}&amount=${amount}`,
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    return responseJSON;
  } catch (error) {
    console.error('Error funding account:', error);
    throw new Error('Failed to add funds in Stellar account');
  }
};
