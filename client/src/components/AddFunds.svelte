<script lang="ts">
  import { fundAccount } from '../services/addFunds';
  import { account } from "../store/store";

  let funds: string = '';
  const BAD_REQUEST_STATUS = 400;

  const handleAddFunds = async () => {
    try {
      funds = 'Loading...'
      const { publicKey } = $account;
      const response = await fundAccount(publicKey);
      if (response.status >= BAD_REQUEST_STATUS) throw new Error();
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
