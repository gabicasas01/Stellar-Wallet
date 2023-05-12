<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchBalance } from '../utils/getBalance.js';
  import { account } from "../store/store.js";

  let balance: string = 'Loading...';
  const { publicKey } = $account

  onMount(async () => {
    try {
      balance = await fetchBalance(publicKey);
    } catch (error) {
      balance = 'Error fetching balance'
    }
  });
</script>

<main>
  <h1>Account Balance</h1>
  <p>Public Key: {publicKey}</p>
  <p>Balance: {balance}</p>
</main>

<style>
  main {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
