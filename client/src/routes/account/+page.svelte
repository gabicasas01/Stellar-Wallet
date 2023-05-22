<script lang="ts">
	import { createAccount } from '../../services/createAccount.js';
	import { account } from '../../store/store.js';
	import { onMount } from 'svelte';
	import AddFunds from '../../components/AddFunds.svelte';
	import GetBalance from '../../components/GetBalance.svelte';
	import SendFunds from '../../components/SendFunds.svelte';
	import GetOperations from '../../components/GetOperations.svelte';

	let isGetBalanceShown = false;
	let isNewTransactionShown = false;
	let isOperationsShown = false;

	const handleCreateAccount = async () => {
		const { publicKey, secretKey } = await createAccount();
		$account = { publicKey, secretKey };
	};

	const handleGetBalance = () => {
		isGetBalanceShown = !isGetBalanceShown;
	};

	const handleSendFunds = () => {
		isNewTransactionShown = !isNewTransactionShown;
	};

  const handleSeeOperations = () => {
		isOperationsShown = !isOperationsShown;
	};

	onMount(handleCreateAccount);
</script>

<main>
	{#if $account.publicKey && $account.secretKey}
		<h1>My account</h1>
		<p>Public key: {$account.publicKey}</p>
		<p>Secret key: {$account.secretKey}</p>
		<AddFunds />
		<button on:click={handleGetBalance}>Get Balance</button>
		<button id="send-funds-button" on:click={handleSendFunds}>Send Funds</button>
    <button on:click={handleSeeOperations}>See Operations</button>
		{#if isGetBalanceShown}
			<GetBalance />
		{/if}
		{#if isNewTransactionShown}
			<SendFunds />
		{/if}
		{#if isOperationsShown}
			<GetOperations />
		{/if}
	{:else}
		<button disabled>Creating Account...</button>
	{/if}
</main>

<style>
	main {
		max-width: 400px;
		margin: 0 auto;
		padding: 2rem;
	}
</style>
