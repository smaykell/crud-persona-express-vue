<template>
<body>
	<div class="navbar navbar-expand-lg navbar-light bg-light">
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarTogglerDemo03"
			aria-controls="navbarTogglerDemo03"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<router-link to="/" class="navbar-brand">Inicio</router-link>
	</div>
	<div class="container pt-4">
		<h1>Nuevo Registro</h1>
		<div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<input type="hidden" v-model="persona.id" class="form-control" name="id" id="id" />
					<label for="dni">DNI</label>
					<input
						type="text"
						v-model="persona.dni"
						class="form-control"
						id="dni"
						placeholder="Ingrese DNI"
						required
					/>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="apellidos">Apellidos</label>
					<input
						type="text"
						v-model="persona.apellidos"
						class="form-control"
						id="apellidos"
						placeholder="Ingrese Apellidos"
						required
					/>
				</div>
				<div class="form-group col-md-6">
					<label for="inputAddress">Nombres</label>
					<input
						type="text"
						v-model="persona.nombres"
						class="form-control"
						id="nombres"
						placeholder="Ingrese Nombres"
						required
					/>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="inputAddress2">Fecha de Nacimiento</label>
					<input type="date" v-model="persona.fecha_nacimiento" class="form-control" id="fechanac" />
				</div>
				<div class="form-group col-md-4">
					<label for="inputCity">Peso</label>
					<input
						type="number"
						v-model="persona.peso"
						class="form-control"
						id="peso"
						placeholder="Ingrese Peso"
						required
					/>
				</div>
				<div class="form-group col-md-4">
					<label for="inputCity">Altura</label>
					<input
						type="number"
						v-model="persona.altura"
						class="form-control"
						id="altura"
						placeholder="Ingrese Altura"
						value="persona.altura"
						required
					/>
				</div>
			</div>
			<div class="form-row">
				<button
					class="btn btn-primary"
					v-if="persona.id == null"
					v-on:click.prevent="addPersona"
				>Guardar</button>
				<button
					class="btn btn-primary"
					v-if="persona.id != null"
					v-on:click.prevent="updatePersona"
				>Actualizar</button>
			</div>
		</div>
	</div>
</body>
</template>

<script>
	class Persona {
		constructor(id, dni, apellidos, nombres, fecha_nacimiento, peso, altura) {
			this.id = id;
			this.dni = dni;
			this.apellidos = apellidos;
			this.nombres = nombres;
			this.fecha_nacimiento = fecha_nacimiento;
			this.peso = peso;
			this.altura = altura;
		}
	}

	import Vue from "vue";
	export default Vue.extend({
		data() {
			return {
				persona: new Persona()
			};
		},
		created() {
			if (this.$route.params.id) {
				this.getPersona(this.$route.params.id);
			}
		},
		methods: {
			async addPersona() {
				const response = await fetch("/crud/persona/", {
					method: "POST",
					body: JSON.stringify(this.persona),
					headers: {
						Accept: "application/json",
						"Content-type": "application/json"
					}
				});
				this.$router.push("/");
			},
			async updatePersona() {
				const response = await fetch("/crud/persona/" + this.$route.params.id, {
					method: "PUT",
					body: JSON.stringify(this.persona),
					headers: {
						Accept: "application/json",
						"Content-type": "application/json"
					}
				});
				this.$router.push("/");
			},
			async getPersona(id) {
				const response = await fetch("/crud/persona/" + id, {
					method: "GET"
				});
				let data = await response.json();
				this.persona = new Persona(
					data.id,
					data.dni,
					data.apellidos,
					data.nombres,
					data.fecha_nacimiento,
					data.peso,
					data.altura
				);
			}
		}
	});
</script>
