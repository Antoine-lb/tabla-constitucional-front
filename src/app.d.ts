/// <reference types="@sveltejs/kit" />

type RawCapitulos = {
	id: number;
	attributes: {
		Nombre: string;
		numero_del_capitulo: number;
		createdAt: string;
		updatedAt: string;
	};
};

type Capitulo = {
	nombre: string;
	numero_del_capitulo: number;
};
