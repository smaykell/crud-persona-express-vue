 <template>
<body>
	<div>
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
			<h1>Lista de personas</h1>
			<router-link to="/nuevo" class="btn btn-primary">Agregar</router-link>

			<div class="table-responsive-sm pt-4">
				<table class="table table-hover">
					<thead>
						<tr>
							<th scope="col">Id</th>
							<th scope="col">Dni</th>
							<th scope="col">Apellidos</th>
							<th scope="col">Nombres</th>
							<th scope="col">Fecha de Nacimiento</th>
							<th scope="col">Peso</th>
							<th scope="col">Altura</th>
							<th scope="col">Acciones</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="persona in personas" :key="persona.id" class="car-div flex-container">
							<th scope="row">{{ persona.id }}</th>
							<td>{{ persona.dni }}</td>
							<td>{{ persona.apellidos }}</td>
							<td>{{ persona.nombres }}</td>
							<td>{{ persona.fecha_nacimiento }}</td>
							<td>{{ persona.peso }}</td>
							<td>{{ persona.altura }}</td>
							<td>
								<button v-on:click="toEditPersona(persona.id)" class="btn btn-primary">Editar</button>
								<button v-on:click="deletePersona(persona.id)" class="btn btn-danger">Eliminar</button>
							</td>
						</tr>
					</tbody>
				</table>
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
				persona: new Persona(),
				personas: []
			};
		},
		created() {
			this.getPersonas();
		},
		methods: {
			async getPersonas() {
				const response = await fetch("/crud/personas");
				const personas = await response.json();
				this.personas = personas;
			},
			async deletePersona(id) {
				await fetch("/crud/persona/" + id, {
					method: "DELETE",
					headers: {
						Accept: "application/json",
						"Content-type": "application/json"
					}
				});
				this.getPersonas();
			},
			toEditPersona(id) {
				this.$router.push("/editar/" + id);
			}
		}
	});
</script>


