<script>
import Modal from './Modal.vue';

export default {
	name: "BuscaDoador",
	data() {
		return {
			nao_buscou: true, // booleano para dizer qual template apresentar: tela de busca ou de dados buscados
			nao_alterando: true,
			userData: {
				codigo: "",
				nome: "",
				cpf: "",
				contato: "",
				tipoSanguineo: "",
				rh: "",
			},
			objAlterando: Object,
			dadosBusca: Object,
			isModalVisible: false,
		};
	},
	components: { Modal },
	methods: {
		handleRemove(item) {
			this.objAlterando = item;
			this.isModalVisible = true; // Abre o modal
		},
		removeConfirmed(item) {
			this.remover(item); // Chama método para remover
			this.isModalVisible = false; // Fecha o modal após a remoção
		},
		cancelRemove() {
			this.isModalVisible = false; // Fecha o modal sem realizar nenhuma ação
		},
		remover(item) {
			fetch(`http://localhost:3000/doador/${item.codigo}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
			location.reload();
		},
		alterar(item) {
			this.nao_alterando = true;
			fetch(`http://localhost:3000/doador/${item.codigo}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					codigo: item.codigo,
					nome: item.nome,
					cpf: item.cpf,
					contato: item.contato,
					tipoSanguineo: item.tipoSanguineo,
					rh: item.rh,
				})
			});
		},
		goToAlterando(item) {
			this.objAlterando = item;
			this.nao_alterando = false;

		},
		goToListaDados() {
			this.nao_alterando = true;
		},
		goToBuscaDoador() {
			this.nao_buscou = true;
		},
		goToTelaInicial() {
			this.$router.push('/telainicial');
		},
		goToBuscaRealizada() {
			this.$router.push('/buscarealizada');
		},
		enviarBuscaDoador() {
			fetch("http://localhost:3000/doador/query", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					codigo: this.userData.codigo,
					nome: this.userData.nome,
					cpf: this.userData.cpf,
					contato: this.userData.contato,
					tipoSanguineo: this.userData.tipoSanguineo,
					rh: this.userData.rh,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					// Aqui você pode processar a resposta do servidor
					this.nao_buscou = false;
					this.dadosBusca = data;
				});
		},
	},
};
</script>

<template>
	<div v-if="nao_buscou && nao_alterando">
		<form @submit.prevent="enviarBuscaDoador">
			<!-- .prevent previne que o form atue de forma padrão e atualize a página com o submit -->
			<fieldset>
				<label for="codigo">Codigo:</label>
				<input v-model="userData.codigo" type="text" id="codigo" placeholder="Insira um código" autofocus />
				<br />

				<label for="nome">Nome:</label>
				<input v-model="userData.nome" type="text" id="nome" placeholder="Insira um nome" autofocus />
				<br />

				<label for="cpf">CPF:</label>
				<input v-model="userData.cpf" type="text" id="cpf" placeholder="Insira um CPF" />
				<br />

				<label for="contato">Contato:</label>
				<input v-model="userData.contato" type="text" id="contato" placeholder="Insira um contato" autofocus />
				<br />

				<label>Tipo Sanguíneo:</label>
				<br />
				<input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="a" value="a" />
				<label for="a">A</label><br />
				<input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="b" value="b" />
				<label for="b">B</label><br />
				<input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="ab" value="ab" />
				<label for="ab">AB</label><br />
				<input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="o" value="o" />
				<label for="o">O</label><br />
				<input v-model="userData.tipoSanguineo" type="radio" name="tipoSanguineo" id="todos" value="" />
				<label for="todos">Todas as opções</label><br /><br />

				<label>RH:</label>
				<br />
				<input v-model="userData.rh" type="radio" name="rh" id="positivo" value="positivo" />
				<label for="positivo">+ (positivo)</label><br />
				<input v-model="userData.rh" type="radio" name="rh" id="negativo" value="negativo" />
				<label for="negativo">- (negativo)</label><br />
				<input v-model="userData.rh" type="radio" name="rh" id="todosRh" value="" />
				<label for="todosRh">Todas as opções</label><br />
				<br />
				<button type="submit">Buscar</button>
			</fieldset>
		</form>
		<button @click="goToTelaInicial">Voltar</button>
	</div>
	<div v-else>
		<div v-if="nao_alterando">
			<table border="1">
				<thead>
					<tr>
						<th>Código</th>
						<th>Nome</th>
						<th>CPF</th>
						<th>Contato</th>
						<th>Tipo Sanguíneo</th>
						<th>RH</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in dadosBusca" :key="item.codigo">
						<td>{{ item.codigo }}</td>
						<td>{{ item.nome }}</td>
						<td>{{ item.cpf }}</td>
						<td>{{ item.contato }}</td>
						<td>{{ item.tipoSanguineo }}</td>
						<td>{{ item.rh }}</td>
						<td><button @click="goToAlterando(item)">Alterar</button></td>
						<td><button @click="handleRemove(item)">Remover</button></td>

						<Modal v-if="isModalVisible" @confirm="removeConfirmed(objAlterando)" @cancel="cancelRemove">
							<!-- O que eu colocar aqui aparecerá onde tiver a tag slot no componente Modal -->
							<h2>Você tem certeza de que deseja remover {{ objAlterando.nome }}?</h2>
						</Modal>
					</tr>
				</tbody>
			</table>
			<br />
			<button @click="goToBuscaDoador">Voltar</button>
		</div>
		<div v-else>
			<form @submit.prevent="alterar(objAlterando)">
				<fieldset>
					<label for="nome">Nome:</label>
					<input v-model="objAlterando.nome" type="text" id="nome" placeholder="Insira seu nome"
						autofocus /><br>

					<label for="cpf">CPF:</label>
					<input v-model="objAlterando.cpf" type="text" id="cpf" placeholder="Insira seu CPF" /><br>

					<label for="contato">Contato:</label>
					<input v-model="objAlterando.contato" type="text" id="contato" placeholder="Insira seu contato"
						autofocus /><br>

					<label>Tipo Sanguíneo:</label><br>
					<input v-model="objAlterando.tipoSanguineo" type="radio" name="tipoSanguineo" id="a" value="a" />
					<label for="a">A</label><br />
					<input v-model="objAlterando.tipoSanguineo" type="radio" name="tipoSanguineo" id="b" value="b" />
					<label for="b">B</label><br />
					<input v-model="objAlterando.tipoSanguineo" type="radio" name="tipoSanguineo" id="ab" value="ab" />
					<label for="ab">AB</label><br />
					<input v-model="objAlterando.tipoSanguineo" type="radio" name="tipoSanguineo" id="o" value="o" />
					<label for="o">O</label><br /><br />

					<label>RH:</label><br>
					<input v-model="objAlterando.rh" type="radio" name="rh" id="positivo" value="positivo" />
					<label for="positivo">+ (positivo)</label><br />
					<input v-model="objAlterando.rh" type="radio" name="rh" id="negativo" value="negativo" />
					<label for="negativo">- (negativo)</label><br /><br />

					<button type="submit">Salvar Alterações</button>
				</fieldset>
			</form>
			<button @click="goToListaDados">Voltar</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
legend {
	color: white;
	background-color: rgba(23, 98, 190, 0.9);
	font-weight: bolder;
	padding: 6px 8px 6px 8px;
	border-radius: 4px;
}

fieldset {
	background-color: lightblue;
	border-width: 3px;
	border-radius: 6px;
	padding: 8px;
}

#erro {
	color: red;
	font-style: italic;
}
</style>
