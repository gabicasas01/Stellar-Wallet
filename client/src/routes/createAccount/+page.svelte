<script lang="ts">
  import { createAccount } from "../../utils/createAccount";
  import AddFunds from '../../components/AddFunds.svelte';
  import GetBalance from '../../components/GetBalance.svelte'
  import SendFunds from '../../components/SendFunds.svelte'

  let newAccount = {
    publicKey: '',
    secretKey: '',
  };

  let showGetBalance = false;
  let showNewTransaction = false;

  const handleCreateAccount = async () => {
    const { publicKey, secretKey } = await createAccount();
    newAccount.publicKey = publicKey;
    newAccount.secretKey = secretKey;
  }
  
  const handleGetBalance = () => {
    showGetBalance = !showGetBalance
  }
  const handleSendFunds = () => {
    showNewTransaction = !showNewTransaction
  }

</script>

<main>
  <button on:click={handleCreateAccount}>Create</button>
  {#if newAccount.publicKey.length > 1 && newAccount.secretKey.length > 1}
    <h1>My account</h1>
    <p>Public key: {newAccount.publicKey}</p>
    <p>Secret key: {newAccount.secretKey}</p>
    <AddFunds {newAccount} />
    <button on:click={handleGetBalance}>Get Balance</button>
    <button on:click={handleSendFunds}>Send Funds</button>
    {#if showGetBalance}
      <GetBalance {newAccount} /> 
    {/if}
    {#if showNewTransaction}
      <SendFunds {newAccount} /> 
  {/if}
  {/if}
</main>

<style>
  main {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
  }
</style>
