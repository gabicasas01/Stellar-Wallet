<script lang="ts">
	import { onMount } from 'svelte';
	import { getOperations } from '../services/getOperations';
	import { account } from '../store/store.js';
	import type { IPayment } from 'src/utils/IPayment.js';
	import type { ICreateAccount } from 'src/utils/ICreateAccount.js';
	import type { IRecord } from 'src/utils/IRecord.js';

	const { publicKey } = $account;
	let records: (ICreateAccount | IPayment | IRecord)[] = [];
	let status: string | null = null;

	onMount(async () => {
		try {
			status = 'Loading...'
			records = await getOperations(publicKey);
			status = null
		} catch (error) {
			status = (error as Error).message;
		}
	});
</script>

<main>
	<h1>My operations</h1>
	{#if status}
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
