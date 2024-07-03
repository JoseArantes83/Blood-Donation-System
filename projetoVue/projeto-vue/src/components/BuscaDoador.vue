<script>
import DoacaoService from '@/services/DoacaoService';
import Modal from './Modal.vue';
import DoadorService from '@/services/DoadorService';

export default {
	name: "BuscaDoador",
	data() {
		return {
			formulario: true,
			buscou: false, // booleano para dizer qual template apresentar: tela de busca ou de dados buscados
			alterando: false,
			listando_doacoes: false,
			userData: {
				codigo: "",
				nome: "",
				cpf: "",
				contato: "",
				tipoSanguineo: "",
				rh: "",
				tipoRhCorretos: ""
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
            DoadorService.remover(item.codigo).then(() => {
			    this.isModalVisible = false; // Fecha o modal após a remoção
                location.reload();
            });
		},
		cancelRemove() {
			this.isModalVisible = false; // Fecha o modal sem realizar nenhuma ação
		},
		alterar(item) {
            DoadorService.alterar(item).then(() => {
                this.alterando = false;
				this.buscou = true;
            })
		},
		goToAlterando(item) {
			this.objAlterando = item;
			this.buscou = false;
			this.alterando = true;
		},
		goToListarDoacoes(codigoDoador) {
			this.enviarBuscaDoacoes(codigoDoador)
		},
		goToListaDados() {
			this.alterando = false;
			this.buscou = true;
		},
		goToBuscaDoador() {
			this.listando_doacoes = false;
			this.buscou = false;
			this.formulario = true;
		},
		goToTelaInicial() {
			this.$router.push('/telainicial');
		},
		goToBuscaRealizada() {
			this.$router.push('/buscarealizada');
		},
		enviarBuscaDoador() {
            DoadorService.buscarDoador(this.userData).then( data => {
                this.dadosBusca = data;
                this.buscou = true;
				this.formulario = false;
            });
		},
		enviarBuscaDoacoes(codigoDoador) {
			DoacaoService.buscarDoacoesByDoadorId(codigoDoador).then( data => {
				this.dadosBusca = data;
				console.log("Dados da busca: "+ data);
				this.buscou = false
				this.listando_doacoes = true //Agora vamos listar as doacoes do doador respectivo
			});
		}
	},
};
</script>

<template>
	<div v-if="formulario">
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
	<div v-if="buscou">
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
						<td><button @click="goToListarDoacoes(item.codigo)">Listar Doações</button></td>

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
	<div v-if="listando_doacoes">
		<table border="1">
				<thead>
					<tr>
						<th>Código</th>
						<th>Data</th>
						<th>Hora</th>
						<th>Volume</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in dadosBusca" :key="item.codigo">
						<td>{{ item.codigo }}</td>
						<td>{{ item.data }}</td>
						<td>{{ item.hora }}</td>
						<td>{{ parseFloat(item.volume).toFixed(2) }}</td>
					</tr>
				</tbody>
			</table>
			<br />
			<button @click="goToBuscaDoador">Voltar</button>
	</div>
	<div v-if="alterando">
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

				<label>Tipo Sanguíneo e RH estão corretos?</label>
				<input v-model="objAlterando.tipoRhCorretos" type="checkbox" name="tipoRhCorretos" id="check" value="check" /> <br>
				<label for=""></label>
				<br>
				<button type="submit">Salvar Alterações</button>
			</fieldset>
		</form>
		<button @click="goToListaDados">Voltar</button>
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
