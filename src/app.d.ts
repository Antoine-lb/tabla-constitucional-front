/// <reference types="@sveltejs/kit" />

type RawCapitulo = {
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

type RawSubCapitulo = {
	id: number;
	attributes: {
		Nombre: string;
		Prioridad: number;
		hex_color: string;
		createdAt: string;
		updatedAt: string;
	};
};

type SubCapitulo = {
	nombre: string;
	prioridad: number;
	hex_color: string;
};
