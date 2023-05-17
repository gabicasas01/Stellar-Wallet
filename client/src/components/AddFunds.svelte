<script lang="ts">
  import { fundAccount } from '../utils/addFunds.js';
  import { account } from "../store/store.js";

  let funds: string = '';

  const handleAddFunds = async () => {
    try {
      funds = 'Loading...'
      const { publicKey } = $account;
      const response = await fundAccount(publicKey);
      if (response.status >= 400) throw new Error();
      funds = 'Added successfully';
    } catch (error) {
      funds = 'Error adding funds';
    }
  };
</script>

<main>
    <button type="button" on:click={handleAddFunds}>
      Add funds
    </button>
  
  {#if funds}
    <p>Funds: {funds}</p> 
  {/if}
</main>
