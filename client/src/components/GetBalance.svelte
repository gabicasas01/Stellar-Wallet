<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchBalance } from '../utils/getBalance.ts';

  export let newAccount: {
    publicKey: string;
    secretKey: string;
  };

  let balance: string = 'Loading...';

  onMount(async () => {
    try {
      balance = await fetchBalance(newAccount.publicKey);
    } catch (error) {
      console.error('Error fetching balance:', error);
      balance = 'Error fetching balance'
    }
  });
</script>

<main>
  <h1>Account Balance</h1>
  <p>Public Key: {newAccount.publicKey}</p>
  <p>Balance: {balance}</p>
</main>

<style>
  main {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
