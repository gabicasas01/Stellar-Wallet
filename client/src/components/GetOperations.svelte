<script lang="ts">
	import { onMount } from 'svelte';
	import { getOperations } from '../services/getOperations';
	import { account } from '../store/store.js';
	import type { IPayment } from 'src/utils/IPayment';
	import type { ICreateAccount } from 'src/utils/ICreateAccount';
	import type { IRecord } from 'src/utils/IRecord';

	const { publicKey } = $account;
	let records: (ICreateAccount | IPayment | IRecord)[] = [];
	let status: string = 'Loading...';

	onMount(async () => {
		try {
			records = await getOperations(publicKey);
			if (records.length === 0) {
				status = 'No transactions found';
			}
		} catch (error) {
			status = 'No transactions found';
		}
	});
</script>

<main>
	<h1>My operations</h1>
	{#if records.length === 0}
		<p>{status}</p>
	{:else}
		<ul>
			{#each records as record}
				<li>
					<h3>{record.type}</h3>
					{#if record.type === 'create_account'}
						<p>Account: {record.account}</p>
						<p>Created At: {record.created_at}</p>
					{:else if record.type === 'payment'}
						<p>Amount: {record.amount.split('.')[0]}</p>
						<p>From: {record.source_account}</p>
						<p>To: {record.to}</p>
						<p>Created At: {record.created_at}</p>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</main>

<style>
	main {
		max-width: 400px;
		margin: 0 auto;
		padding: 2rem;
	}
</style>
