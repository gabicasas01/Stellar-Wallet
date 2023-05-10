<script lang="ts">
    import { onMount } from 'svelte';
    import StellarSdk from 'stellar-sdk';
  
    const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
  
    export let newAccount: {
      publicKey: string;
      secretKey: string;
    };
  
    let balance: string = '';
  
    async function fetchBalance() {
      try {
        const account = await server.loadAccount(newAccount.publicKey);
        balance = account.balances.find((asset: any) => asset.asset_type === 'native').balance;
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    }
  
    onMount( async () => await fetchBalance());
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
  