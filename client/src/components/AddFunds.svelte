<script lang="ts">
  import { fundAccount } from '../utils/addFunds.ts';

  export let newAccount: {
    publicKey: string;
    secretKey: string;
  };

  let message: string = '';

  const handleAddFunds = async () => {
    try {
      message = 'Loading...'
      const response = await fundAccount(newAccount.publicKey, 200);
      if(response.status >= 400) throw new Error
      message = 'Funds added successfully';
    } catch (error) {
      console.error('Error:', error);
      message = 'Error adding funds';
    }
  };
</script>

<main>
  <form>
    <button type="button" on:click={handleAddFunds}>
      Agregar fondos
    </button>
  </form>
  
  {#if message}
    <p>{message}</p> 
  {/if}
</main>
