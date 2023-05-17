<script lang="ts">
	import { sendNewTransaction } from '../services/sendFunds.js';
	import { account } from '../store/store.js';
	import type { ITransaction } from '../utils/ITransaction';

	const { secretKey } = $account;

	let transaction: ITransaction = {
		amount: null,
		destination: null,
		state: null
	};

	const handleSubmit = async () => {
		transaction.state = 'Loading...';
		try {
			if (secretKey && transaction.amount && transaction.destination) {
				await sendNewTransaction(secretKey, transaction.destination, transaction.amount);
				transaction.state = 'Success';
			} else {
				throw new Error('Amount and destination are required.');
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				transaction.state = 'Error: ' + error.message;
			} else {
				transaction.state = 'Unknown error occurred.';
			}
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
