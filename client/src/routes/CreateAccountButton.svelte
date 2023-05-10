<script lang="ts">
  import { createAccount } from "../utils/createAccount.js";

  const newAccount = {
    publicKey: '',
    secretKey: '',
  }

  const handleCreateAccount = async () => {
    const { publicKey, secretKey } = await createAccount();
    newAccount.publicKey = publicKey;
    newAccount.secretKey = secretKey;
  }

</script>

<button on:click={handleCreateAccount}>Create Account</button>

<p>Public key: {newAccount.publicKey}</p>
<p>Secret key: {newAccount.secretKey}</p>
<p>Prueba</p>