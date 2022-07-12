/// <reference types="@sveltejs/kit" />

type RawCapitulo = {
	id: number;
	attributes: {
		Nombre: string;
		numero_del_capitulo: number;
		createdAt: string;
		updatedAt: string;
		sub_capitulos: { data: RawSubCapitulo[] };
	};
};

type RawSubCapitulo = {
	id: number;
	attributes: {
		Nombre: string;
		Prioridad: number;
		hex_color: string;
		createdAt: string;
		updatedAt: string;
		articulos: { data: RawArticulo[] };
	};
};

type RawArticulo = {
	id: number;
	attributes: {
		contenido: string;
		nombre_corto: string;
		numero_de_articulo: number;
		numero_de_incisos: number;
		pagina: number;
		simbolo: string;
		createdAt: string;
		updatedAt: string;
	};
};
