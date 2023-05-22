<script lang="ts">
  import { fundAccount } from '../services/addFunds';
  import { account } from "../store/store";

  let fundsStatus: string = '';
  const BAD_REQUEST_STATUS = 400;

  const handleAddFunds = async () => {
    try {
      fundsStatus = 'Loading...'
      const { publicKey } = $account;
      const response = await fundAccount(publicKey);
      if (response.status >= BAD_REQUEST_STATUS) throw new Error();
      fundsStatus = 'Added successfully';
    } catch (error) {
      fundsStatus = 'Error adding funds';
    }
  };
</script>

<main>
    <button id="add-funds-button" type="button" on:click={handleAddFunds}>
      Add funds
    </button>
  
  {#if fundsStatus}
    <p>Status: {fundsStatus}</p> 
  {/if}
</main>
