 export class Competicao {
            #id;
            #nome;
            #data;
            #local;
            #distancia;
            #vetAtletas;

            constructor(id, nome, data, local, distancia) {
                this.#id = id;
                this.#nome = nome;
                this.#data = data;
                this.#local = local;
                this.#distancia = distancia;
                this.#vetAtletas = [];
            }

            get id() {
                return this.#id;
            }

            get nome() {
                return this.#nome;
            }

            get data() {
                return this.#data;
            }

            get local() {
                return this.#local;
            }

            get distancia() {
                return this.#distancia;
            }

            get atletas() {
                return this.#vetAtletas;
            }

            set nome(nome) {
                this.#nome = nome;
            }

            set data(data) {
                this.#data = data;
            }

            set local(local) {
                this.#local = local;
            }

            set distancia(distancia) {
                this.#distancia = distancia;
            }

            adicionarAtleta(atleta) {
               
                for (let i = 0; i < this.#vetAtletas.length; i++) {
                    if (this.#vetAtletas[i] === atleta.id) {
                        alert("Atleta já inscrito nesta competição!");
                        return false;
                    }
                }
               
                this.#vetAtletas.push(atleta);
                return true;
            }

            removerAtleta(atleta) {
                let atletaRemovido = false;
                for (let i = 0; i < this.#vetAtletas.length; i++) {
                    if (this.#vetAtletas[i].id === atleta.id) {
                        this.#vetAtletas.splice(i, 1);
                        atletaRemovido = true;
                    }
                }
            }

            toString() {
                return `Competição: ${this.#nome}, Data: ${this.#data}, Local: ${this.#local}, Distância: ${this.#distancia}km, Atletas inscritos: ${this.#vetAtletas.length}`;
            }
        }