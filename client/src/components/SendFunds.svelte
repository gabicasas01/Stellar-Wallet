<script lang="ts">
	import { sendNewTransaction } from '../utils/sendFunds';

	interface Transaction {
		amount: string | null;
		destination: string | null;
		state: string | null;
	}

	export let newAccount: any;

	let transaction: Transaction = {
		amount: null,
		destination: null,
		state: null
	};

	const handleSubmit = async () => {
		transaction.state = 'Loading...';
		try {
			await sendNewTransaction(newAccount.secretKey, transaction.destination, transaction.amount);
			transaction.state = 'Success';
		} catch (error) {
			transaction.state = 'Error: ' + error.message;
		}
	};
</script>

<div>
	<h2>Send funds</h2>
	<form on:submit|preventDefault={handleSubmit}>
		<label>
			Amount:
			<input type="text" bind:value={transaction.amount} />
		</label>
		<label>
			Destination account:
			<input type="text" bind:value={transaction.destination} />
		</label>
		<button type="submit">Send</button>
	</form>
	{#if transaction.amount !== null}
		<p>Amount: {transaction.amount}</p>
	{/if}
	{#if transaction.destination !== null}
		<p>Destination: {transaction.destination}</p>
	{/if}
	{#if transaction.state !== null}
		<p>State: {transaction.state}</p>
	{/if}
</div>
