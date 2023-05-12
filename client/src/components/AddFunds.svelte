<script lang="ts">
  import { fundAccount } from '../utils/addFunds.js';
  import { account } from "../store/store.js";

  let message: string = '';

  const handleAddFunds = async () => {
    try {
      message = 'Loading...'
      const { publicKey } = $account;
      const response = await fundAccount(publicKey);
      if (response.status >= 400) throw new Error();
      message = 'Funds added successfully';
    } catch (error) {
      message = 'Error adding funds';
    }
  };
</script>

<main>
  <form>
    <button type="button" on:click={handleAddFunds}>
      Add funds
    </button>
  </form>
  
  {#if message}
    <p>{message}</p> 
  {/if}
</main>
