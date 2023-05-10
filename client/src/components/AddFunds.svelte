<script lang="ts">
    import { fundAccount } from '../utils/addFunds.ts';

    export let newAccount: {
      publicKey: string;
      secretKey: string;
    };

    const handleAddFunds = async () => {
      const response = await fundAccount(newAccount.publicKey, 200);
      console.log(response);
    };
    </script>
    
    <form>
      <button type="button" on:click={handleAddFunds}>
        Agregar fondos
      </button>
    </form>
    