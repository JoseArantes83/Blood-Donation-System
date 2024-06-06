<template>
	<div class="modal">
		<div class="modal-inner">
			<slot /> <!-- aqui aparecerá o que está na tag Modal de BuscaDoador -->
			<div class="botoes">
				<button class="modal-confirm" @click="Confirm">Confirmar</button>
				<button class="modal-cancel" @click="Cancel">Cancelar</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		Confirm() {
			this.$emit('confirm');
		},
		Cancel() {
			this.$emit('cancel');
		},
	},
};
</script>

<style lang="scss" scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;

	.modal-inner {
		background: white;
		padding: 32px;
		border-radius: 10px;

		.botoes {
			padding: 10px 0px 0px 0px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
</style>