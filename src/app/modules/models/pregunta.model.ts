export type pregunta = {
    colegio: string,
    id: number,
    pregunta: string,
    tipo_edad: number,
    tipo_estructura: number,
    tipo_pregunta: number
}

export type preguntas = {
    preguntas: Array<pregunta>
}

export type tipo_estructura = {
    colegio: string,
    descripcion: string,
    id: number,
    tipo: number
}
export type tipo_estructuras = {
    tipoEstructuras: Array<tipo_estructura>
}

export type tipo_edad = {
    colegio: string,
    franja: string,
    id: number,
    tipo: string
}

export type tipo_edades = {
    tipoEdades: Array<tipo_edad>
}

export type tipo_pregunta = {
    colegio: string,
    descripcion: string,
    id: number,
    tipo: string
}

export type tipo_preguntas = {
    tipoPreguntas: Array<tipo_pregunta>
}