export type cuestionario = {
    colegio: string,
    estructura: number,
    fecha_cierre: string,
    final: number,
    first: number,
    followUp: number,
    id: number,
    school_year: string

}

export type cuestionarioList = {
    tests: Array<cuestionario>
}