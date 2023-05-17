<script lang="ts">
import { createAccount } from "../../utils/createAccount.js";
import { account } from "../../store/store.js";
import { onMount } from "svelte";
import AddFunds from '../../components/AddFunds.svelte';
import GetBalance from '../../components/GetBalance.svelte'
import SendFunds from '../../components/SendFunds.svelte'

let isGetBalanceShown = false;
let isNewTransactionShown = false;


const handleCreateAccount = async () => {
  const { publicKey, secretKey } = await createAccount()
  $account = {publicKey, secretKey}
}

const handleGetBalance = () => {
  isGetBalanceShown = !isGetBalanceShown
}

const handleSendFunds = () => {
  isNewTransactionShown = !isNewTransactionShown
}

onMount(handleCreateAccount);
</script>

<main>
  {#if $account.publicKey && $account.secretKey}
    <h1>My account</h1>
    <p>Public key: {$account.publicKey}</p>
    <p>Secret key: {$account.secretKey}</p>
    <AddFunds/>
    <button on:click={handleGetBalance}>Get Balance</button>
    <button on:click={handleSendFunds}>Send Funds</button>
    {#if isGetBalanceShown}
      <GetBalance/> 
    {/if}
    {#if isNewTransactionShown}
      <SendFunds/> 
    {/if}
  {:else}
    <button disabled>Creating Account...</button>
  {/if}
</main>


<style>
  main {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
