<script lang="ts">
    import { fundAccount } from '../../utils/addFunds.js';
    
    let amount = 0;
    
    const handleAddFunds = async () => {
      const response = await fundAccount('account.publicKey', 200);
      console.log(response);
    };
    </script>
    
    <form>
      <label>
        Cantidad a agregar:
        <input type="number" bind:value={amount} min="0" step="0.00001" />
      </label>
      <button type="button" on:click={handleAddFunds}>
        Agregar fondos
      </button>
    </form>
    